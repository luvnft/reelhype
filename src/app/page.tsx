'use client';


import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';


export default function HomePage() {
    return (
        <main className="w-full container max-w-[1400px] mx-auto flex h-screen flex-col justify-end ">
            <div className=" lg:flex-row lg:justify-end mb-20">
                <div className='flex flex-col lg:gap-0 gap-3'>
                    <h1 className="font-secondary text-4xl font-semibold lg:mb-4 lg:text-4xl">
                        Discover. Discuss. Dive In.
                    </h1>
                    <h2 className=" text-lg lg:mb-6 ">
                        Watch the latest movie and TV trailers with ease.
                    </h2>
                    <Button variant={'secondary'} className='w-fit' >
                        <Link className='flex flex-row items-center gap-2' href={'/Discover'}>
                            <h1>
                                Discover Now
                            </h1>
                            <ArrowRight color='#F80' className="h-4 w-4 inline-block" />
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
