import type { Movie, MovieData } from '@/types/tmdb-types';
import { kv } from '@vercel/kv';

export async function TrendingFilms() {
    const cachedResults = await kv.get('trending');
    
    if (cachedResults) {
        return cachedResults as MovieData;
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

    if (!cachedResults) {
        await kv.set('trending', JSON.stringify(res.json()));
        return cachedResults as MovieData;
    }
}

export const fetchSearchResults = async (query: string) => {
    const cachedResults = await kv.get('search');

    if (cachedResults) {
        return cachedResults as MovieData;
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

    if (!cachedResults) {
        await kv.set('trending', JSON.stringify(res.json()));
        return cachedResults as MovieData;
    }
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

    if (!responseData) {
        await kv.set(media_type + id, JSON.stringify(data));
        return responseData as Movie;
    }
}
