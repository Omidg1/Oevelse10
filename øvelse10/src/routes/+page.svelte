<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';
	import Input from '$lib/Input.svelte';
	import Title from '$lib/components/Title.svelte';
	import Link from '$lib/components/Link.svelte';
	import H1 from '$lib/components/H1.svelte';

	let username = $state('user');
	let password = $state('password');

	const login = async () => {
		const response = await fetch('/api/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password })
		});
		const data = await response.json();
		if (response.ok) {
			goto('/home');
		} else {
			alert('Login failed!');
		}
	};
</script>

<Title>Telemedicin 2025</Title>

<H1>Login</H1>
<p class="mb-4">Log ind for at få adgang til din dagbog.</p>

<input class="input mb-4 block" bind:value={username} type="text" placeholder="Indtast Email" />
<input
	class="input mb-4 block"
	bind:value={password}
	type="password"
	placeholder="Indtast Password"
/>
<button class="btn btn-primary mb-4" onclick={login}>Login</button>

<p>Har du ikke en konto endnu?</p>
<Link href="/signup">Opret ny konto</Link>
