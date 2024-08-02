import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function HomePage() {
    return (
        <main className="container mx-auto mt-20 flex min-h-screen max-w-[1300px] justify-center md:mt-[71px] lg:mt-32">
            <div className="flex flex-col gap-6 text-center">
                <h1 className="font-secondary text-[30px] md:text-[59px] lg:text-[90.4px] ">
                    Lights, Camera, Preview!
                    <br />
                    Your Movie & TV Trailer Hub
                </h1>

                <p className="text-[16px] text-[#9C9C9C] lg:text-lg">
                    Watch the Latest Trailers, Join Live Premieres, and Connect
                    with Fellow Fans.
                </p>

                <Link href="/Discover">
                    <Button
                        className="mx-auto flex w-fit flex-row gap-1"
                        size="lg"
                    >
                        Watch Trending Trailers
                        <ArrowUpRight />
                    </Button>
                </Link>

                <div className="flex flex-row gap-2">
                    <h3 className="text-[16px] text-[#9C9C9C] lg:text-lg">
                        Powered by
                    </h3>
                    <Image
                        src="/tmdb-logo.svg"
                        alt="tmdb logo"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </main>
    );
}
