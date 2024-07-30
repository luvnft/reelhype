'use client';

import { useState } from 'react';

import { CldImage } from 'next-cloudinary';

import {
    isYouTubeProvider,
    MediaPlayer,
    MediaProvider,
    type MediaProviderAdapter,
} from '@vidstack/react';
import {
    defaultLayoutIcons,
    DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/layouts/video.css';
import '@vidstack/react/player/styles/default/theme.css';

import { ScrollArea } from '@/components/ui/scroll-area';
import { FilmInfo } from '@/server/tmdb';
import type { Genre, VideoPlayerProps } from '@/types/tmdb-types';
import { useQuery } from '@tanstack/react-query';

import { Calendar, Star, Tag } from '@phosphor-icons/react';
import { formatDate } from '../_config/date-formatter';

export function VideoPlayer({
    sources,
    info,
    mediaType,
    id,
}: VideoPlayerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function nextVideo() {
        setCurrentIndex((n) => Math.min(sources.length - 1, n + 1));
    }

    function selectVideo(index: number) {
        setCurrentIndex(index);
    }

    function onProviderChange(provider: MediaProviderAdapter | null) {
        if (isYouTubeProvider(provider)) {
            provider.cookies = true;
        }
    }

    const { data } = useQuery({
        queryKey: ['FilmInfo'],
        queryFn: async () => {
            const data = await FilmInfo({ media_type: mediaType, id: id });
            return data;
        },
    });

    function formatGenres(genres: Genre[]) {
        return genres.map((genre) => genre.name).join(', ');
    }

    const formattedDate = formatDate(data?.release_date ?? '');
    const formattedGenres = formatGenres(data?.genres ?? []);
    return (
        <div className="flex h-fit w-full flex-col gap-6 ">
            <div className="mb-0 h-fit w-full shadow-white-lg lg:mb-10 ">
                {sources[currentIndex] && (
                    <MediaPlayer
                        autoPlay={true}
                        src={sources[currentIndex]}
                        aspectRatio="16/9"
                        onProviderChange={onProviderChange}
                        playsInline
                        streamType="on-demand"
                        viewType="video"
                        logLevel="warn"
                        crossOrigin
                        onEnded={nextVideo}
                    >
                        <MediaProvider />
                        <DefaultVideoLayout icons={defaultLayoutIcons} />
                    </MediaPlayer>
                )}
            </div>

            <section className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-10">
                <div className="flex w-full flex-col gap-2 lg:gap-4">
                    <h1 className="font-secondary text-2xl lg:text-3xl ">
                        {data?.name ?? data?.original_name ?? data?.title}
                    </h1>
                    <div className="flex flex-row items-center gap-3 ">
                        <div className="flex flex-row items-center gap-1">
                            <Calendar color="#F5C111" />
                            <h1 className="text-sm lg:text-xs">
                                {formattedDate ?? 'Unavailable'}
                            </h1>
                        </div>

                        <div className="flex flex-row items-center gap-1">
                            <Star color="#F5C111" />
                            <h1 className="text-sm lg:text-xs">
                                {data?.vote_average ?? 'Unavailable'}
                            </h1>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <Tag color="#F5C111" />
                            <h1 className="text-sm lg:text-xs">
                                {formattedGenres ?? 'Unavailable'}
                            </h1>
                        </div>
                    </div>
                    <p className="text-gray-300 text-lg">
                        {data?.overview}
                    </p>
                </div>
                <div>
                    <div className="mb-3 flex flex-row justify-between">
                        <h1 className="text-xl font-medium">
                            Related Trailers
                        </h1>
                    </div>

                    <ScrollArea className="h-[280px] w-full rounded-md border bg-[#0A0B0B] p-4 md:w-full lg:h-full lg:max-h-[400px] lg:w-[432px]">
                        {info.map((item, index) => (
                            <div
                                key={item.key}
                                className="flex cursor-pointer flex-col gap-4"
                                onClick={() => selectVideo(index)}
                            >
                                <div
                                    className={`flex flex-row items-start gap-4 rounded-lg px-2 py-4 ${index === currentIndex ? 'bg-black/50' : ''}`}
                                >
                                    <CldImage
                                        src={`https://img.youtube.com/vi/${item.key}/hqdefault.jpg`}
                                        alt={item.name}
                                        width={168}
                                        deliveryType="fetch"
                                        height={94}
                                        className="aspect-video rounded-lg object-cover"
                                    />
                                    <div className="grid gap-1 text-sm">
                                        <h2 className="font-medium">
                                            {item.name}
                                        </h2>
                                        {item.seasonNumber !== undefined && (
                                            <h2>
                                                {item.seasonNumber === 0
                                                    ? 'General Trailer'
                                                    : `Season ${item.seasonNumber}`}
                                            </h2>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ScrollArea>
                </div>
            </section>
        </div>
    );
}
