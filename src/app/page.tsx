import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Background, RandomItems } from './_components/background';

export default async function HomePage() {
    const datas = (await RandomItems())!;

    const { original_name, name, title, id, media_type } = datas;

    if (!datas) {
        return <div>Error loading data</div>;
    }

    // Convert the number to a string
    const vote_average_str = datas.vote_average.toString();

    // Extract the first two characters from the string representation
    const vote = vote_average_str.slice(0, 3);

    return (
        <main className="relative flex min-h-screen">
            <div className="min-h-screen w-full bg-black/10">
                <Background randomItem={datas} />
            </div>

            <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black/70 to-black " />

            <header className="absolute inset-0">
                <div className="mx-auto flex h-full w-full max-w-[1200px] flex-col items-center justify-center p-3 lg:p-5">
                    <section className="mt-24 flex h-full w-full max-w-[860px] flex-col  gap-[20px] lg:mt-32 lg:gap-[32px]">
                        <div className="mx-auto flex w-full max-w-[500px] flex-row justify-between rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-xl lg:px-5 lg:py-3">
                            <div className="flex flex-row items-center gap-3">
                                <h1 className="text-sm text-white lg:text-lg">
                                    {original_name ?? name ?? title}
                                </h1>
                                <div className="flex flex-row items-center gap-3">
                                    <Icons.star />
                                    <h1 className="text-sm lg:text-lg">
                                        {vote}
                                    </h1>
                                </div>
                            </div>

                            <Link
                                href={`/info/${media_type}/${id}`}
                                className="flex h-fit flex-row items-center gap-1 rounded-full bg-white px-1 py-1 text-black lg:px-3 lg:py-1.5"
                            >
                                <h1 className="text-sm lg:text-lg">
                                    Watch Trailer
                                </h1>
                                <ChevronRight className="h-[16px] w-[16px] stroke-black lg:h-[24px] lg:w-[24px] " />
                            </Link>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <h1 className="w-full gap-4 text-center font-secondary  text-4xl font-semibold text-white lg:text-6xl">
                                Lights, Camera, Preview! Your Movie & TV Trailer
                                Hub
                            </h1>
                            <p className="text-center text-lg lg:text-xl">
                                Watch the Latest Trailers, Join Live Premieres,
                                and Connect with Fellow Fans.
                            </p>
                        </div>

                        <Button asChild className="rounded-full bg-[#F5C111] ">
                            <Link href="/Discover">Discover Trailers</Link>
                        </Button>
                    </section>
                </div>
            </header>
        </main>
    );
}
