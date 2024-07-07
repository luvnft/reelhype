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
import { Button } from "@/components/ui/button";

interface TrailerInfo {
  key: string;
  name: string;
  seasonNumber?: number;
}

interface VideoPlayerProps {
  sources: string[];
  info: TrailerInfo[];
}

export function VideoPlayer({ sources, info }: VideoPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevVideo() {
    setCurrentIndex((n) => Math.max(0, n - 1));
  }

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

  return (
    <div className="flex h-fit w-full flex-col gap-6 lg:flex-row lg:justify-between">
      <div className="h-fit w-full shadow-white-lg lg:max-w-[700px] xl:max-w-[1200px]">
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

      <div>
        <div className="mb-3 flex flex-row justify-between">
          <h1 className="text-xl font-medium">Related Trailers</h1>
          <div className="flex flex-row gap-4">
            <Button size="sm" onClick={prevVideo}>
              Prev Trailer
            </Button>
            <Button size="sm" onClick={nextVideo}>
              Next Trailer
            </Button>
          </div>
        </div>

        <ScrollArea className="h-[500px] w-full rounded-md border p-4 md:w-full lg:h-full lg:max-h-[700px] lg:max-w-[500px]">
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
    </div>
  );
}
