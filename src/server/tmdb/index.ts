import { redis } from '@/lib/redis';
import type { Movie, MovieData } from '@/types/tmdb-types';

export async function TrendingFilms() {
    const key = 'trending';
    const cached = await redis.get(key);
    if (cached) {
        console.log('cached');
        return cached as unknown as MovieData;
    }
    const res = await fetch(
        'https://api.themoviedb.org/3/trending/all/day?language=en-US',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
            },
        }
    );

    const data = (await res.json()) as MovieData;

    await redis.set(key, JSON.stringify(data), { ex: 86400 });
    console.log('set');

    return data;
}

export const fetchSearchResults = async (query: string) => {
    const key = `search-${query}`;
    const cached = await redis.get(key);
    if (cached) {
        return cached as unknown as MovieData;
    }
    const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
            },
            cache: 'no-store',
        }
    );

    const data = (await res.json()) as MovieData;

    await redis.set(key, JSON.stringify(data), { ex: 86400 });

    return data;
};

export async function FilmInfo({
    media_type,
    id,
}: {
    media_type: string;
    id: string;
}) {
    const key = `${media_type}-${id}`;
    const cached = await redis.get(key);
    if (cached) {
        return cached as unknown as Movie;
    }
    const res = await fetch(
        `https://api.themoviedb.org/3/${media_type}/${id}?language=en-US`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
            },
        }
    );

    const data = (await res.json()) as Movie;

    await redis.set(key, JSON.stringify(data), { ex: 86400 });

    return data;
}
