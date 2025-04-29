<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';
	import Input from '$lib/Input.svelte';

	let userName = $state('');
	let password = $state('');

	const btnclick = () => {
		if (userName === 'admin' && password === 'admin') {
			goto('/home');
		} else {
			alert('Login failed');
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

	<!-- Tilføjet: Link til opret bruger side -->
	<p class="mt-4 text-white">
		Har du ikke en bruger?
		<a href="/admin" class="link link-primary ml-2 underline">Opret en her</a>
	</p>
</div>
