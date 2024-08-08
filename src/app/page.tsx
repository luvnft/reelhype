'use client';

import { BackgroundCarousel } from '@/app/_components/background';
import { Button } from '@/components/ui/button';
import { ArrowRight } from '@phosphor-icons/react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="mt-24 flex h-fit flex-col  gap-10">
            <BackgroundCarousel className="order-last sm:order-last md:order-last lg:order-first" />

            <div className="order-first h-fit w-full px-6 sm:order-first md:order-first md:px-10 lg:order-last lg:px-20">
                <div className="flex flex-col justify-end gap-3 bg-gradient-to-r from-black to-black/50">
                    <h1 className="font-secondary text-4xl font-semibold lg:text-4xl">
                        Discover. Discuss. Dive In.
                    </h1>
                    <h2 className=" text-lg  ">
                        Watch the latest movie and TV trailers with ease.
                    </h2>
                    <Button variant={'secondary'} className="w-fit">
                        <Link
                            className="flex flex-row items-center space-x-2"
                            href={'/Discover'}
                        >
                            <h1>Discover Now</h1>
                            <ArrowRight
                                color="#F80"
                                className="inline-block h-4 w-4"
                            />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
