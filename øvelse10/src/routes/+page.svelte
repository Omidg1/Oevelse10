<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';
	import Input from '$lib/Input.svelte';

<script>
	import { goto } from '$app/navigation';
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

<div class="flex min-h-screen flex-col items-center justify-center bg-blue-900 p-4">
	<h1 class="mb-6 text-3xl font-bold text-white">Log in</h1>

	<div>
		<Input class="input m-2" bind:value={userName} placeholder="Brugernavn" />
	</div>
	<div>
		<Input class="input m-2" bind:value={password} placeholder="Adgangskode" />
	</div>
	<div>
		<Button class="btn btn-primary m-2" onclick={btnclick}>Login</Button>
	</div>

	<p class="mt-4 text-white">
		Har du ikke en bruger?
		<a href="/admin" class="link link-primary ml-2 underline">Opret en her</a>
	</p>
</div>
