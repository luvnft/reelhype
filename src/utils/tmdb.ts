import type { MovieData } from "@/types/tmdbs";

export const fetchSearchResults = async (query: string) => {
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
