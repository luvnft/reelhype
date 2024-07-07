"use client";

import React, { useState } from "react";
import { ImageComponent } from "@/components/image-component";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";

import { useQuery } from "@tanstack/react-query";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  name: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface MovieData {
  results: Movie[];
}

const Search = () => {
  return (
    <div className="mx-auto  w-full max-w-[1200px] ">
      <div className="flex flex-col gap-10 px-4 py-10 lg:px-0">
        <h1 className="font-mono text-3xl">Search</h1>
        <div>
          <MultiSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;

const fetchSearchResults = async (query: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTY3NDQ0N2MxOTI1M2FlZWVkYmEzNDVhZDVmNmYyMSIsIm5iZiI6MTcxOTMyMTIxNi45MzgzMDMsInN1YiI6IjY1ODU1MDNkMDFiMWNhNWY1NzkwMjI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SVqsIg2gF2RybzHLBxErF3sElLtw1jGDmemMIT5z-cs`,
      },
      cache: "no-store",
    },
  );
  const data = (await res.json()) as MovieData;
  return data;
};

const MultiSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data } = useQuery({
    queryKey: ["search", searchQuery],
    queryFn: () => fetchSearchResults(searchQuery),

    enabled: searchQuery !== "", // Only fetch data when searchQuery is not empty
  });

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className=" mb-6 w-full">
        <input
          type="text"
          placeholder="What movie/tv trailer do you want to watch?"
          className="block h-[70px] w-full rounded-full border border-gray-300 bg-white p-2.5 pl-16 text-xl font-medium text-black placeholder-black/50 focus:ring-2 focus:ring-white  "
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="grid grid-cols-2 justify-center gap-x-5 gap-y-6 lg:grid-cols-4 lg:gap-x-3">
        {data?.results.map((search) => (
          <Link
            href={`/info/${search.media_type}/${search.id}`}
            key={search.id}
            className="flex w-[180px] flex-col gap-5 lg:w-[200px]"
          >
            <ImageComponent
              src={`https://image.tmdb.org/t/p/w500${search.poster_path}`}
              alt={search.title}
              width={200}
              height={200}
              className="h-auto w-[180px] rounded-xl border border-gray-500 transition-all hover:shadow-sm hover:shadow-white/30 hover:outline hover:outline-2 hover:outline-stone-400 lg:h-full lg:w-full"
            />
            <div>
              <p className="font-mono  text-lg  text-white">
                {search.title || search.original_title || search.name}
              </p>
              <div className="flex flex-row items-center gap-3">
                <h1 className="flex flex-row items-center gap-1 text-sm">
                  <Icons.star />
                  {search.vote_average}
                </h1>
                <div className="h-fit w-fit rounded border border-gray-500 px-2 text-sm  text-gray-500">
                  {search.media_type}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
