// ./src/app/_components/background.tsx

'use client';

import ImageComponent from '@/components/image-component';
import { cn } from '@/lib/utils';
import { TrendingFilms, UpcomingMovies } from '@/server/tmdb';
import { useQuery } from '@tanstack/react-query';
import Marquee from 'react-fast-marquee';

export const BackgroundCarousel = ({ className }: { className?: string }) => {
    const { data: trendingData, isLoading: trendingLoading } = useQuery({
        queryKey: ['background'],
        queryFn: TrendingFilms,
    });

    const { data: upcomingData, isLoading: upcomingLoading } = useQuery({
        queryKey: ['upcoming'],
        queryFn: UpcomingMovies,
    });

    if (trendingLoading || upcomingLoading) {
        return <div>Loading...</div>; // loading state, or return a spinner, etc.
    }

    return (
        <div className={cn('flex flex-col gap-0 lg:gap-3', className)}>
            <Marquee
                gradient={true}
                gradientColor="black"
                gradientWidth={350}
                speed={30}
                direction={'left'}
                loop={0}
                className="w-full "
            >
                <div className="flex flex-row gap-3 space-x-3 bg-gradient-to-r from-black via-transparent to-black ">
                    {trendingData?.results?.map((trending) => (
                        <div
                            key={trending.id}
                            className="flex-0 min-width-0 flex shrink-0 grow-0"
                        >
                            <ImageComponent
                                width={260}
                                height={320}
                                src={`https://image.tmdb.org/t/p/original${trending.poster_path}`}
                                alt={
                                    trending.title ??
                                    trending.name ??
                                    trending.original_title
                                }
                                className="h-[320px] w-[260px]  overflow-hidden rounded-lg object-cover"
                            />
                        </div>
                    ))}
                </div>
            </Marquee>
            <Marquee
                gradient={true}
                gradientColor="black"
                gradientWidth={350}
                speed={30}
                direction={'right'}
                loop={0}
                className="hidden w-full lg:block"
            >
                <div className="hidden md:block lg:block">
                    <div className=" flex  w-full  flex-row gap-3 space-x-3 bg-gradient-to-r from-black via-transparent to-black ">
                        {upcomingData?.results?.map((trending, idx) => (
                            <div
                                key={trending.id}
                                className="flex-0 min-width-0 flex shrink-0 grow-0"
                            >
                                <ImageComponent
                                    width={260}
                                    height={320}
                                    src={`https://image.tmdb.org/t/p/original${trending.poster_path}`}
                                    alt={
                                        trending.title ??
                                        trending.name ??
                                        trending.original_title
                                    }
                                    className="h-[320px] w-[260px]  overflow-hidden rounded-lg object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Marquee>
        </div>
    );
};
