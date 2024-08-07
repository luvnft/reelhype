'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
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
            <nav className="mx-auto flex w-full max-w-[1400px]  px-3 py-4 lg:px-0 ">
                <section className="flex w-full flex-row items-center justify-between ">
                    <div className="flex flex-row items-center gap-[52px]">
                        <div className="flex flex-row items-center gap-4">
                            <MobileNav />
                            <Link href={'/'}>
                                <h1 className="font-accent text-2xl text-white">
                                    Reel<span className="text-[#F80]">Hype</span>
                                </h1>
                            </Link>
                        </div>
                    </div>

                    <div className="hidden flex-row items-center gap-[52px] lg:flex">
                        {navItems.map((nav, index) => {
                            const { name, href } = nav;

                            return (
                                <Link
                                    key={index}
                                    className={`text-lg ${pathname === href ? 'text-white underline decoration-[#F80] decoration-wavy decoration-2 underline-offset-4' : 'text-gray-300 transition-all duration-300 hover:text-white'}`}
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
                            <Search className="h-[28px] w-[28px]" />
                        </Link>

                        <div>
                            <SignedOut>
                                <h1 className='text-[#f80] '

                                >
                                    <SignInButton />
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
