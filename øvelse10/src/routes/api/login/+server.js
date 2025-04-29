import bcrypt from 'bcryptjs';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';


export async function POST({ request, cookies }) {
    const { username, password } = await request.json();
    const userData = await db.query.user.findFirst({
        where: eq(user.username, username) // Find the user by username
    }); // Find the user by username
    if (!userData) {
        // No user found
        return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }
    const isPasswordValid = await bcrypt.compare(password, userData.password);


    if (!isPasswordValid) {
        // Password is incorrect
        return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 401 });
    }
    // Set the session cookie with the user ID
    cookies.set('session', userData.id.toString(), { path: '/', httpOnly: true, maxAge: 60 * 60 }); // 1 hour
    return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
}
