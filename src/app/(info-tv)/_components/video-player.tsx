"use client";

import { useState } from "react";

import { CldImage } from "next-cloudinary";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import {
  MediaPlayer,
  MediaProvider,
  isYouTubeProvider,
  type MediaProviderAdapter,
} from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";


interface TrailerInfo {
  key: string;
  name: string;
  seasonNumber?: number;
}

interface VideoPlayerProps {
  sources: string[];
  info: TrailerInfo[];
  mediaType: string;
  id: string;
}

export function VideoPlayer({ sources, info, mediaType, id }: VideoPlayerProps) {
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
    queryFn: async() => {
     const data = await FilmInfo({media_type:mediaType, id: id})
     return data
    }
  })

    

  

  return (
    <div className="flex h-fit w-full flex-col gap-6 ">
      <div className="h-fit w-full shadow-white-lg lg:mb-10 mb-0 ">
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

     <section className="flex lg:flex-row lg:justify-between flex-col lg:gap-10 gap-8">
      <div className="w-full flex flex-col lg:gap-4 gap-2">
        <h1 className="font-secondary lg:text-3xl text-2xl ">{data?.name ?? data?.original_name ?? data?.title}</h1>
        <p className="lg:text-lg text-sm text-gray-300">{data?.overview}</p>
      </div>
     <div>
        <div className="mb-3 flex flex-row justify-between">
          <h1 className="text-xl font-medium">Related Trailers</h1>
         
        </div>

        <ScrollArea className="h-[280px] bg-[#0A0B0B] w-full rounded-md border p-4 md:w-full lg:h-full lg:max-h-[400px] lg:w-[432px]">
          {info.map((item, index) => (
            <div
              key={item.key}
              className="flex cursor-pointer flex-col gap-4"
              onClick={() => selectVideo(index)}
            >
              <div
                className={`flex flex-row items-start gap-4 rounded-lg px-2 py-4 ${index === currentIndex ? "bg-black/50" : ""}`}
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
                  <h2 className="font-medium">{item.name}</h2>
                  {item.seasonNumber !== undefined && (
                    <h2>
                      {item.seasonNumber === 0
                        ? "General Trailer"
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


async function FilmInfo({media_type, id}: {media_type:string, id:string}) {
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
  const res = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${id}?language=en-US`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTY3NDQ0N2MxOTI1M2FlZWVkYmEzNDVhZDVmNmYyMSIsIm5iZiI6MTcxOTMyMTIxNi45MzgzMDMsInN1YiI6IjY1ODU1MDNkMDFiMWNhNWY1NzkwMjI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SVqsIg2gF2RybzHLBxErF3sElLtw1jGDmemMIT5z-cs`,
      },
    },
  );

  const data = (await res.json()) as Movie;

  return data
}
