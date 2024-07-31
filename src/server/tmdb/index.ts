import type { Movie, MovieData } from '@/types/tmdb-types';
import { kv } from "@vercel/kv";

export async function TrendingFilms() {
    const responseData = await kv.get('trending');
    if (responseData) {
        return responseData as MovieData
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

    await kv.set('trending', data);

    return data;
}

export const fetchSearchResults = async (query: string) => {
    const responseData = await kv.get('search');
    if (responseData) {
        return responseData as MovieData
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

    await kv.set('search', data);

    return data;
};

export async function FilmInfo({
    media_type,
    id,
}: {
    media_type: string;
    id: string;
}) {
    const responseData = await kv.get(media_type + id);
    if (responseData) {
        return responseData as Movie;
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

    await kv.set(media_type + id, data);

    return data;
}
