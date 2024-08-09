import type { Movie, MovieData } from '@/types/tmdb-types';

export async function TrendingFilms() {
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

    return data;
}

export async function UpcomingMovies() {
    const res = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
            },
        }
    );

    const data = (await res.json()) as MovieData;

    return data;
}

export async function UpcomingShows() {
    const res = await fetch(
        'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
            },
        }
    );

    const data = (await res.json()) as MovieData;

    return data;
}

export const fetchSearchResults = async (query: string) => {
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

    return data;
};

export async function FilmInfo({
    media_type,
    id,
}: {
    media_type: string;
    id: string;
}) {
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

    return data;
}
