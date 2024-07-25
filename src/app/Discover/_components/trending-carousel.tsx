'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { useQuery } from "@tanstack/react-query";
import { ImageComponent } from "@/components/image-component";
import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

import { TrendingFilms } from '@/server/tmdb';
import { Button } from '@/components/ui/button';
import Link from 'next/link'




export const TrendingCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(), WheelGesturesPlugin()])
  const { data } = useQuery({
        queryKey: ['TrendingCarousel'],
        queryFn: TrendingFilms
    })

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex flex-start flex-row gap-1">
        {data?.results?.map((trending) => (
          <div key={trending.id} className="flex-0 relative min-width-0 grow-0  shrink-0">
          <ImageComponent
              width={1200}
              height={1200}
              src={`https://image.tmdb.org/t/p/original${trending.backdrop_path}`}
              alt={trending.title ?? trending.name ?? trending.original_title}
              className="lg:h-auto h-[300px] object-cover lg:w-full w-screen overflow-auto "
            />
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black h-full w-full' />

            <div className='absolute left-0 right-0 bottom-[30px]'>
              <div className='p-5 flex flex-col w-full gap-2'>
                <h1 className='lg:text-4xl text-xl font-secondary'>
                {trending.title ?? trending.name ?? trending.original_title}
                </h1>
                <p className='lg:text-lg truncate mb-1 max-w-4xl text-sm text-gray-300 '>
                  {trending.overview}...
                </p>

                <Button className='w-fit' asChild>
                  <Link href={`/info/${trending.media_type}/${trending.id}`}>Watch Trailer</Link>
                </Button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

