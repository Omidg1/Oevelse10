<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';
	import Input from '$lib/Input.svelte';

	let username = $state('');
	let password = $state('');

	const btnclick = async () => {
		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: username,
					password: password
				})
			});

			if (response.ok) {
				const result = await response.json();
				// Du kan her gemme brugerdata/token hvis nødvendigt
				goto('/home');
			} else {
				alert('Login mislykkedes – forkert brugernavn eller adgangskode');
			}
		} catch (error) {
			console.error('Login-fejl:', error);
			alert('Der opstod en fejl ved loginforsøget');
		}
	};
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-blue-900 p-4">
	<h1 class="mb-6 text-3xl font-bold text-white">Log in</h1>

	<div>
		<Input class="input m-2" bind:value={username} placeholder="Brugernavn" />
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
