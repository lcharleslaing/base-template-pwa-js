import { json } from '@sveltejs/kit'
import db from '$lib/database'

export async function GET(event) {
    const posts = await db.post.findMany()
    console.log(event)
    return json(posts)
}
