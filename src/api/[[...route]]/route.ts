import {Hono} from 'hono'
import { handle } from 'hono/vercel'
import { TrendingFilms } from '@/server/tmdb';

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/TrendingFilms', async(c) => {
    const data = await TrendingFilms()
    return c.json(data)

})

export const GET = handle(app)
