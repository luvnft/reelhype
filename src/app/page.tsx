import Link from "next/link";
import { Background, RandomItems } from "./_components/background";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { ChevronRight } from "lucide-react";
import ComboBox from "./_components/combo-box";



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

export default async function HomePage() {
  const datas = await RandomItems() as Movie;

  const {original_name, name, title, id, media_type} = datas

  if (!datas) {
    return <div>Error loading data</div>;
  }

  // Convert the number to a string
  const vote_average_str = datas.vote_average.toString();

  // Extract the first two characters from the string representation
  const vote = vote_average_str.slice(0, 3);

  return (
    <main className="flex min-h-screen relative">
      <div className="min-h-screen w-full bg-black/20">
        <Background randomItem={datas} />
      </div>

      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black/70 to-black " />

      <header className="absolute inset-0">
        <div className="flex flex-col items-center justify-center max-w-[1200px] p-5 mx-auto w-full h-full">

          <section className="flex flex-col max-w-[860px] w-full mt-32  h-full gap-[32px]">
            <div className="flex flex-col items-center gap-4">
              <h1 className="lg:text-6xl w-full text-4xl font-semibold  text-center font-secondary text-white gap-4">
              Lights, Camera, Preview! Your Movie & TV Trailer Hub
              </h1>
              <p className="text-xl text-center">
                Watch the Latest Trailers, Join Live Premieres, and Connect with Fellow Fans.
              </p>
            </div>
            
            <ComboBox />
        <div className="flex flex-row mx-auto justify-between max-w-[500px] w-full bg-black/50 px-5 py-3 rounded-full backdrop-blur-xl">
          <div className="flex flex-row gap-3 items-center">
            <h1 className="text-white">{original_name ?? name ?? title}</h1>
            <div className="flex flex-row gap-3 items-center">
              <Icons.star /> 
              <h1>{vote}</h1>
            </div>
          </div>
            
            <Link href={`/info/${media_type}/${id}`} className="bg-white flex flex-row gap-1 text-black rounded-full py-1.5 h-fit px-3">
              <h1>
              Watch trailer
              </h1>
              <ChevronRight className="stroke-black" /> 
            </Link>
        </div>

            
          </section>

         
        </div>
      </header>
    </main>
  );
}
