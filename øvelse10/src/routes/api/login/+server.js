import bcrypt from 'bcryptjs';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';

export async function POST({ request, cookies }) {
	const { username, password } = await request.json();

	console.log('Login forsøgt:', username);
	
	const userData = await db.query.user.findFirst({
		where: eq(user.username, username)
	});

	console.log('Bruger fundet i DB:', userData);

	if (!userData) {
		console.log('Ingen bruger fundet.');
		return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
	}

	const isPasswordValid = await bcrypt.compare(password, userData.password);

	console.log('Password valid:', isPasswordValid);

	if (!isPasswordValid) {
		console.log('Forkert password.');
		return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 401 });
	}

	cookies.set('session', userData.id.toString(), {
		path: '/',
		httpOnly: true,
		maxAge: 60 * 60
	});

	console.log('Login succesfuldt, session sat for:', userData.username);

	return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
}
