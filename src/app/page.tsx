// ./src/app/page.tsx

import Link from "next/link";
import { Background, RandomItems } from "./_components/background";
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export default async function HomePage() {
  const datas = await RandomItems()

  // Convert the number to a string
  let vote_average_str = datas?.vote_average && datas?.vote_average?.toString() || null;

  // Extract the first two characters from the string representation
  let vote = vote_average_str && vote_average_str?.slice(0, 3) || null;

  return (
    <main className="flex min-h-screen relative">
      <div className="min-h-screen w-full bg-black/20">
        <Background randomItem={datas && datas || null} />
      </div>

      <div className="absolute top-0 right-0 left-0 bottom-0 h-full w-full bg-gradient-to-b from-transparent to-black " />

      <header className="absolute top-0 bottom-0 right-0 left-0">
        <div className="flex flex-col items-center justify-center max-w-[1200px] p-5 mx-auto w-full h-full">
          

          <section className="flex flex-col items-center justify-center w-full h-full gap-[32px]">
            <div className="flex flex-col items-center gap-4">
              <h1 className="lg:text-6xl text-4xl font-bold text-center font-mono text-white gap-4">
                Unleash the Hype: Your Ultimate Destination for Movie & TV Trailers
              </h1>
              <p className="text-xl text-center">
                Watch the Latest Trailers, Join Live Premieres, and Connect with Fellow Fans.
              </p>
            </div>

            <Button size={'lg'} className="rounded-full bg-[#FF5722] hover:bg-[#b84c2c] text-white font-mono">
              Watch Trailers Now
            </Button>
          </section>

          <footer className="flex flex-row justify-between items-start w-full">
            <div>
              <h1 className="text-lg">{datas.name && datas.name || datas.title && datas.title || null}</h1>
              <h2 className="flex flex-row gap-2 items-center"><Icons.star />{vote && vote || null}</h2>
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
