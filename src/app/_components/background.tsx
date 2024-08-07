// ./src/app/_components/background.tsx

'use client';

import useEmblaCarousel from 'embla-carousel-react';

export function Background() {
    const [emblaRef] = useEmblaCarousel();
    return (
        <div className=" w-full bg-cover">
            <div className="w-full overflow-hidden">
                <div className="flex"></div>
            </div>
        </div>
    );
}
