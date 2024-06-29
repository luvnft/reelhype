// /info/[media_type]/[id]/page.tsx

import { VideoPlayer } from "@/app/(info-tv)/_components/video-player";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/ui/icons";
import { Disqus } from "@/app/(info-tv)/_components/disqus";
import { CldImage } from 'next-cloudinary';


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
export default async function Page({ params: { media_type, id } }: { params: { media_type: string, id: string } }) {
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
  const data = await res.json() as Movie;



  const {
    name,
    original_name,
    overview,
    vote_average,
    title,
    tagline,
    backdrop_path,
  } = data;

  // Convert the number to a string
  const vote_average_str = vote_average?.toString();

  // Extract the first two characters from the string representation
  const vote = vote_average_str.slice(0, 3);

  return (
    <div className="relative min-h-screen">
      <CldImage
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={original_name}
        fill
        deliveryType='fetch'
        className="h-[550px] bg-cover bg-top object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 h-[550px] w-full bg-gradient-to-b from-transparent to-black " />
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <div className="mx-auto mt-16 flex w-full max-w-[1770px] items-center rounded-lg px-3 py-0 lg:px-10 lg:py-3">
          <div className=" flex w-full flex-col gap-10  lg:gap-20">
            <div className=" ">
              <TrailerInfo media_type={media_type} id={id} />
            </div>

            <div className="flex w-full max-w-[1200px] flex-col gap-3 px-3  lg:gap-4 lg:px-0">

              {/* Name */}
              <h1 className="font-mono text-2xl lg:text-4xl">
                {name || original_name || title}
              </h1>

              {/* Rating & Tagline */}
              <div className="flex flex-row gap-4">
                <p className="text-sm italic lg:text-lg">{tagline}</p> -
                <div className="flex flex-row items-center gap-1">
                  <Icons.star />
                  <p className="text-sm lg:text-lg">{vote || null}</p>
                </div>

              </div>

              <Separator />

              {/* Overview */}
              <p className="text-sm lg:text-lg">{overview}</p>

              <Separator />

              {/* Comment section */}
              <div className="flex flex-col gap-8">
                <h1 className="text-2xl font-medium ">Comments</h1>
                <div>
                  <Disqus id={id} title={name || original_name || title} media_type={media_type} />
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <pre></pre>
    </div>
  );
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
}

interface ApiResponse {
  results: Video[];
}

interface TrailerInfoProps {
  media_type: string;
  id: string;
}

const TrailerInfo: React.FC<TrailerInfoProps> = async ({ media_type, id }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${id}/videos?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    },
  );
  const data = await response.json() as ApiResponse;

  // Filter the results to include only those with type "Trailer"
  const trailers = data.results.filter((video) => video.type === "Trailer");

  return (
    <div className="flex flex-col gap-3 lg:gap-5">
      <VideoPlayer
        sources={trailers.map((trailer) => `youtube/${trailer.key}`)}
        info={trailers.map((trailer) => trailer.key)}
      />
    </div>
  );
};
