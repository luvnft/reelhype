import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default function NotFound() {
    return (
        <div className="flex items-center justify-center w-full h-screen">

            <div className='flex flex-col items-center lg:gap-5 md:gap-5 gap-3 justify-center text-center'>
                <h1 className="font-secondary lg:text-[256px] md:text-9xl font-semibold text-[#F5C111] text-5xl ">
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
