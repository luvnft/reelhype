import type { MovieData } from '@/types/tmdbs'



export async function TrendingFilms() {
  
 
    
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMD_API_KEY}`,
        },
        cache: "no-store",
      },
    );
  
    const data = (await res.json()) as MovieData;
    
    
    return data;
  }