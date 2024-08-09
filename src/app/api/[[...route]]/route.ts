import { TrendingFilms } from '@/server/tmdb';
import type { MovieData } from '@/types/tmdb-types';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.get('/TrendingFilms', async (c) => {
    const data = await TrendingFilms();
    return c.json(data as unknown as MovieData);
});

app.get('/health', async (c) => {
    return c.json({
        message: 'Hello openstatus!',
    });
});

export const GET = handle(app);
