import { VideoPlayer } from "@/app/(info-tv)/_components/video-player";
import { Disqus } from "@/app/(info-tv)/_components/disqus";
import { ImageComponent } from "@/components/image-component";

interface Movie {
  id: string;
  media_type: string;
  poster_path: string;
  title: string;
  vote_average: number;
  name: string;
  original_name: string;
  overview: string;
  tagline: string;
  backdrop_path: string;
}

interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
  seasonNumber?: number;
}

interface ApiResponse {
  results: Video[];
}

interface Season {
  season_number: number;
}

interface ShowData {
  seasons: Season[];
}

interface TrailerInfoProps {
  media_type: "movie" | "tv";
  id: string;
}

interface TrailerInfo {
  key: string;
  name: string;
  seasonNumber?: number;
}

export async function generateMetadata({
  params,
}: {
  params: { media_type: string; id: string };
}) {
  const { media_type, id } = params;
  const res = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${id}?language=en-US`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    },
  );
  const data = (await res.json()) as Movie;

  const { name, original_name, overview, title } = data;

  return {
    title: name || original_name || title,
    description: overview,
  };
}

export default async function Page({
  params: { media_type, id },
}: {
  params: { media_type: string; id: string };
}) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${id}?language=en-US`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    },
  );
  const data = (await res.json()) as Movie;

  const {
    name,
    original_name,
    title,
    backdrop_path,
  } = data;

  

  return (
    <div className="relative min-h-screen">
        <ImageComponent
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={original_name}
        width={1200}
        height={1200}
        className="object-cover w-screen lg:h-[700px] h-[400px] "
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[700px] h-[400px]" />

      
      <div className="absolute inset-0">
        <div className="mx-auto mt-24 flex w-full max-w-[1200px] items-center rounded-lg px-3 py-0 lg:mt-20  lg:py-3">
          <div className=" flex w-full flex-col gap-10  lg:gap-10">
            <div className=" ">
              <TrailerInfo media_type={media_type as "movie" | "tv"} id={id} />
            </div>

              

              <div className="flex flex-col gap-8">
                <h1 className="text-2xl font-medium ">Comments</h1>
                <div>
                  <Disqus
                    id={id}
                    title={name || original_name || title}
                    media_type={media_type}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

const TrailerInfo: React.FC<TrailerInfoProps> = async ({ media_type, id }) => {
  let allTrailers: Video[] = [];

  if (media_type === "movie") {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
      },
    );
    const data = (await response.json()) as ApiResponse;
    allTrailers = data.results.filter((video) => video.type === "Trailer");
  } else if (media_type === "tv") {
    const showResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
      },
    );
    const showData = (await showResponse.json()) as ShowData;
    const seasons: Season[] = showData.seasons.filter(
      (season) => season.season_number > 0,
    );

    for (const season of seasons) {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/season/${season.season_number}/videos?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
          },
        },
      );
      const data = (await response.json()) as ApiResponse;
      const seasonTrailers = data.results.filter(
        (video) => video.type === "Trailer",
      );
      seasonTrailers.forEach((trailer) => {
        trailer.seasonNumber = season.season_number;
      });
      allTrailers.push(...seasonTrailers);
    }

    const showTrailersResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
      },
    );
    const showTrailersData = (await showTrailersResponse.json()) as ApiResponse;
    const showTrailers = showTrailersData.results.filter(
      (video) => video.type === "Trailer",
    );
    showTrailers.forEach((trailer) => {
      trailer.seasonNumber = 0;
    });
    allTrailers.push(...showTrailers);
  }

  const trailerInfo: TrailerInfo[] = allTrailers.map((trailer) => ({
    key: trailer.key,
    name: trailer.name,
    seasonNumber: trailer.seasonNumber,
  }));


  return (
    <div className="flex flex-col gap-3 lg:gap-5">
      <VideoPlayer
        sources={allTrailers.map((trailer) => `youtube/${trailer.key}`)}
        info={trailerInfo}
        id={id}
        mediaType={media_type}
      />
    </div>
  );
};
