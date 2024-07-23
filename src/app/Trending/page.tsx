import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { ImageComponent } from "@/components/image-component";
import {redis} from "@/lib/redis"

interface Movie {
  id: string;
  media_type: string;
  poster_path: string;
  title: string;
  vote_average: number;
  name: string;
}

interface MovieData {
  results: Movie[];
}

export default async function Trending() {
  const data = await fetchTrendingImages();

  return (
    <div className="mx-auto lg:mt-20 mt-16 flex w-full max-w-[1200px] flex-col lg:gap-10 gap-6 px-2 py-10">
      <h1 className="px-3 font-secondary text-2xl lg:text-4xl ">Trending</h1>
      <div className="grid grid-cols-2 gap-x-2 gap-y-3 lg:grid-cols-5 lg:gap-5">
        {data.results.map((trending) => (
          <Link
            href={`/info/${trending.media_type}/${trending.id}`}
            key={trending.id}
            className="flex cursor-pointer flex-col items-start gap-1 px-[13px]"
          >
            <ImageComponent
              width={198.1}
              height={296.51}
              src={`https://image.tmdb.org/t/p/original${trending.poster_path}`}
              alt={trending.title || trending.name}
              className="h-auto w-full max-w-[198.10px] rounded-xl border border-gray-500 object-cover transition-all hover:shadow-sm hover:shadow-white/30 hover:outline hover:outline-2 hover:outline-stone-400 lg:h-[296.51px]"
            />
            <div className="py-3 pr-3">
              <h2 className="font-secondary  lg:text-lg text-sm font-normal text-white">
                {trending.title || trending.name}
              </h2>
              <div className="flex flex-row items-center gap-2">
                <Icons.star />
                <p className="font-primary text-sm font-normal text-white">
                  {trending.vote_average}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

async function fetchTrendingImages() {
  const cachedData = await redis.get("trending");
  if (cachedData) {
    return cachedData as MovieData;
  }
  
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?language=en-US",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
      cache: "no-store",
    },
  );

  const data = (await res.json()) as MovieData;
  
  await redis.set("trending", JSON.stringify(data));
  return data;
}
