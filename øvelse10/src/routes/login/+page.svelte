<script>
	import { goto } from '$app/navigation';
	let username = $state('');
	let password = $state('');

	const login = async () => {
		const response = await fetch('/api/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password })
		});

		const data = await response.json();
		if (response.ok) {
			goto('/admin'); // redirect ved succes
		} else {
			alert('Login fejlet!');
		}
	};
</script>

<h1 class="mb-4 text-2xl font-bold text-white">Login</h1>

<input bind:value={username} type="text" placeholder="Indtast Email" class="input m-2" />
<input bind:value={password} type="password" placeholder="Indtast Password" class="input m-2" />

<button on:click={login} class="btn btn-primary m-2">Login</button>
