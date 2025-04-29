<script>
	let { value = $bindable(''), placeholder = '' } = $props();
</script>

<input class="input m-2" bind:value {placeholder} />
