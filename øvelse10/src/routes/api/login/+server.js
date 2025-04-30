import bcrypt from 'bcryptjs';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';

export async function POST({ request, cookies }) {
    const { username, password } = await request.json();

    const userData = await db.query.user.findFirst({
        where: eq(user.username, username)
    });

    // Debug: udskriv input og resultat
    console.log('Modtaget username:', username);
    console.log('Fundet bruger:', userData);

    if (!userData) {
        return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, userData.password);

    if (!isPasswordValid) {
        return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 401 });
    }

    cookies.set('session', userData.id.toString(), {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60
    });

    return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
}
