<script>
	import { createSubscriber } from 'svelte/reactivity';

	let username = $state('user');
	let password = $state('password');

	const createUser = async () => {
		const response = await fetch('/api/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});

		await response.json();
		if (response.ok) {
			alert('Bruger oprettet!');
		} else {
			alert('Fejl ved oprettelse af bruger!');
		}

		username = '';
		password = '';
	};
</script>

<h1 class="text-2xl font-bold">Den hemmelige administratorside</h1>

<div>
	<input type="text" bind:value={username} placeholder="Brugernavn" class="input" />
</div>
<div>
	<input type="password" bind:value={password} placeholder="Adgangskode" class="input" />
</div>
<div>
	<button class="btn btn-primary" on:click={createUser}>Opret bruger</button>
</div>

<!-- Allerede bruger? Gå hjem -->
<div class="mt-4">
	<a href="/" class="btn btn-secondary">← Hjem</a>
</div>
