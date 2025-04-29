import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema.js';
import bcrypt from 'bcryptjs';

export async function POST({ request }) {
	const { username, password } = await request.json();

	// Hash passwordet med bcrypt
	const hashedPass = await bcrypt.hash(password, 10);

	// Indsæt i databasen
	const createdUser = await db.insert(user).values({
		username,
		password: hashedPass
	}).returning();

	// Returnér et svar med HTTP status 201 (Created)
	return new Response(JSON.stringify(createdUser), {
		status: 201
	});
}
