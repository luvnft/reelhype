import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 text-center">
            <h1 className="font-secondary text-3xl font-semibold text-[#F5C111] lg:text-5xl">
                404
            </h1>
            <h2 className="lg:text-2xl">Page Not Found</h2>

            <Button asChild size={'sm'} className="mx-auto rounded-full">
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    );
}
