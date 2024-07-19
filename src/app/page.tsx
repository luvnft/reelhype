import Link from "next/link";
import { Background, RandomItems } from "./_components/background";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";


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

      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-black " />

      <header className="absolute inset-0">
        <div className="flex flex-col items-center justify-center max-w-[1200px] p-5 mx-auto w-full h-full">

          <section className="flex flex-col items-center justify-center w-full h-full gap-[32px]">
            <div className="flex flex-col items-center gap-4">
              <h1 className="lg:text-6xl text-4xl  text-center font-secondary text-white gap-4">
                Unleash the Hype: Your Ultimate Destination for Movie & TV Trailers
              </h1>
              <p className="text-xl text-center">
                Watch the Latest Trailers, Join Live Premieres, and Connect with Fellow Fans.
              </p>
            </div>

            <Button asChild size={'lg'} className="rounded-full bg-[#FF5722] hover:bg-[#b84c2c] text-white ">
              <Link href="/Trending">
              Watch Trailers Now
              </Link>
            </Button>
          </section>

          <footer className="flex flex-row justify-between items-start w-full">
            <div>
              <h1 className="text-lg">{datas.name || datas.title || null}</h1>
              <h2 className="flex flex-row gap-2 items-center"><Icons.star />{vote}</h2>
            </div>

            <Button className="rounded-full bg-white/50" size={'sm'} asChild>
              <Link href={`/info/${datas.media_type}/${datas.id}`}>Watch Trailer</Link>
            </Button>
          </footer>
        </div>
      </header>
    </main>
  );
}
