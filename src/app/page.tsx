import { Button } from "@/components/ui/button";
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image"

export default async function HomePage() {
   

    return (
        <main className="flex max-w-[1300px] justify-center lg:mt-32 md:mt-[71px] mt-20 mx-auto container min-h-screen">
            <div className='flex flex-col text-center gap-6'>
                <h1 className="font-secondary lg:text-[90.4px] md:text-[59px] text-[30px] ">
                Lights, Camera, Preview!<br />Your Movie & TV Trailer Hub
                </h1>

                <p className='lg:text-lg text-[16px] text-[#9C9C9C]'>
                Watch the Latest Trailers, Join Live Premieres, and Connect with Fellow Fans.
                </p>

                <Button className='w-fit mx-auto flex flex-row gap-1' asChild  size="lg">
                    <Link href={'/Discover'}>Watch Trending Trailers</Link>
                    <ArrowUpRight />
                </Button>

                <div className="flex flex-row gap-2">
                   <h3 className='lg:text-lg text-[16px] text-[#9C9C9C]'>
                    Powered by TMDB
                </h3> 
                <Image src="/tmdb-logo.svg" alt="tmdb logo" width={200} height={200}/>
                </div>
                
            </div>

           
        </main>
    );
}
