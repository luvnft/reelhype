// ./src/app/_components/background.tsx

import ImageComponent from '@/components/image-component';
import { TrendingFilms } from '@/server/tmdb';
import type { Movie } from '@/types/tmdb-types';

export async function RandomItems() {
    const data = await TrendingFilms();
    const randomIndex = Math.floor(Math.random() * 10);
    const randomItem = data.results[randomIndex];

    return randomItem;
}

export function Background({ randomItem }: { randomItem: Movie }) {
    return (
        <div className="min-h-screen w-full bg-cover">
            {randomItem && (
                <ImageComponent
                    src={`https://image.tmdb.org/t/p/original${randomItem.backdrop_path}`}
                    alt={randomItem.title || randomItem.name}
                    fill={true}
                    className="object-cover"
                />
            )}
        </div>
    );
}
