<script>
	let { children, onclick } = $props();
</script>

<button class="btn btn-primary m-2" {onclick}>{@render children()}</button>
