// ./src/app/_components/background.tsx

import { ImageComponent } from '@/components/image-component';


interface Movie {
    id: string;
    media_type: string;
    poster_path: string;
    title: string;
    vote_average: number;
    name: string;
    backdrop_path: string;
}

interface MovieResults {
    results: Movie[];
}


async function fetchTrendingImages() {
    const res = await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
        cache: 'no-store'
    })

    const data = await res.json() as MovieResults;
    return data
}

export async function RandomItems() {
    const data = await fetchTrendingImages()

    // Use Math.random to pick a random index between 0 and 9
    const randomIndex = Math.floor(Math.random() * 10)
    const randomItem = data.results[randomIndex]

    return randomItem
}

export function Background({ randomItem }: { randomItem: Movie }) {
    return (
        <div className="w-full min-h-screen bg-cover">
            {randomItem && (
                <ImageComponent
                    src={`https://image.tmdb.org/t/p/original${randomItem.backdrop_path}`}
                    alt={randomItem.title || randomItem.name}
                    fill={true}
                    className="object-cover"
                />
            )}
        </div>
    )
}
