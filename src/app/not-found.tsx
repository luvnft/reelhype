import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3 text-center md:gap-5 lg:gap-5">
                <h1 className="font-secondary text-5xl font-semibold text-[#F80] md:text-9xl lg:text-[256px] ">
                    404
                </h1>
                <h2 className="lg:text-2xl">Page Not Found</h2>

                <Button asChild className="mx-auto w-fit">
                    <Link href="/">Return Home</Link>
                </Button>
            </div>
        </div>
    );
}
