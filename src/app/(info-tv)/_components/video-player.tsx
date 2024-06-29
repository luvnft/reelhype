"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

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
import { Button } from "@/components/ui/button";

async function TrailerImages({ id }: { id: string }) {
  const apiKey = "AIzaSyDUDmLll7eVZYFxi0u8VbrdkRSYNWylcZA";
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}&part=snippet`,
  );
  const data = await res.json();
  return data;
}

export function VideoPlayer({ sources, info }: any) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trailer-images", info],
    queryFn: () => TrailerImages({ id: info }),
  });
  const [src, setSrc] = useState(0);

  function prevVideo() {
    setSrc((n) => Math.max(0, n - 1));
  }

  function nextVideo() {
    setSrc((n) => Math.min(sources.length - 1, n + 1));
  }

  function onProviderChange(provider: MediaProviderAdapter | null) {
    if (isYouTubeProvider(provider)) {
      provider.cookies = true;
    }
  }

  return (
    <div className="flex w-full h-fit flex-col  lg:flex-row lg:justify-between gap-6">
      <div className="w-full h-fit shadow-white-lg lg:max-w-[700px] xl:max-w-[1200px]">
        <MediaPlayer
          autoPlay={true}
          src={sources[src]}
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
      </div>


      <div>

        <div className="flex flex-row justify-between mb-3">
          <h1 className="font-medium text-xl">Related Trailers</h1>
          <div className="flex flex-row gap-4">
            <Button size={'sm'} onClick={prevVideo}>Prev Trailer</Button>
            <Button size={'sm'} onClick={nextVideo}>Next Trailer</Button>
          </div>
        </div>

        <ScrollArea className="lg:h-[670px] h-[500px] w-full lg:max-w-[500px] md:w-full w-full rounded-md border p-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <>
              {data?.items?.map((item, index) => (
                <div key={item.id || index} className="flex flex-col gap-4 ">
                  <div className={` flex flex-row items-start gap-4 py-4 px-2 rounded-lg ${sources[src] === `youtube/${item.id}` ? 'bg-black/50' : ''}`}>
                    {item.snippet?.thumbnails?.high?.url && (
                      <img
                        src={item.snippet.thumbnails.high.url}
                        alt={item.snippet.title}
                        className="aspect-video h-[94px] w-[168px] rounded-lg object-cover"
                      />
                    )}
                    <div className="grid gap-1 text-sm">
                      <h2 className="font-medium">{item.snippet?.title}</h2>
                      <h2>Trailer</h2>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </ScrollArea>
      </div>

    </div>
  );
}
