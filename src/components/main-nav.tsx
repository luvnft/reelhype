'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { ArrowUpRight } from '@phosphor-icons/react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNav from './mobile-nav';

const navItems = [
    {
        name: 'Discover',
        href: '/Discover',
    },
    {
        name: 'Search',
        href: '/Search',
    },
];

export function MainNav() {
    const pathname = usePathname();

    return (
        <div className="fixed left-0 right-0  top-0 z-50 w-full bg-gradient-to-b from-black to-transparent">
            <nav className="mx-auto flex h-[80px] w-full  px-3 lg:px-20  ">
                <section className="flex w-full flex-row items-center justify-between ">
                    <div className="flex flex-row items-center gap-[52px]">
                        <div className="flex flex-row items-center gap-4">
                            <MobileNav />
                            <Link href={'/'}>
                                <div className="flex h-fit w-fit items-center rounded bg-[#f80] px-2 ">
                                    <h1 className="font-accent text-2xl  text-black">
                                        ReelHype
                                    </h1>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="hidden flex-row items-center gap-[45px] lg:flex">
                        {navItems.map((nav, index) => {
                            const { name, href } = nav;

                            return (
                                <Link
                                    key={index}
                                    prefetch={true}
                                    className={`rounded-full px-3 py-0.5 text-lg transition-all duration-300 hover:bg-[#2b2b2b] ${pathname === href ? 'text-white underline decoration-[#F80] decoration-wavy decoration-2 underline-offset-4' : 'text-gray-300 transition-all duration-300 hover:text-white'}`}
                                    href={href}
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </div>

                    <header className="flex flex-row items-center gap-5">
                        <Link
                            className="block cursor-pointer transition-all duration-300 hover:bg-gray-950 lg:hidden"
                            href="/Search"
                        >
                            <Search className="" />
                        </Link>

                        <div>
                            <SignedOut>
                                <h1 className="flex flex-row items-center gap-1 text-lg text-[#f80] ">
                                    <SignInButton />
                                    <ArrowUpRight />
                                </h1>
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </header>
                </section>
            </nav>
        </div>
    );
}
