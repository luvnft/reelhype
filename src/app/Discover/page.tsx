import { TrendingCarousel } from '@/app/Discover/_components/trending-carousel';
import ImageComponent from '@/components/image-component';
import { Icons } from '@/components/ui/icons';
import { TrendingFilms } from '@/server/tmdb';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Discover',
    description: 'Discover movies and tv trailers',
};

export default async function Trending() {
    const data = await TrendingFilms();

    return (
        <div className="mx-auto mt-20 flex w-full max-w-[1400px] flex-col gap-6 px-2 lg:mt-20 lg:gap-10 ">
            <TrendingCarousel />
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
                            <h2 className="font-secondary  text-sm font-normal text-white lg:text-lg">
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
