<script>
	import '../app.postcss';
</script>

<main>
	<slot />
</main>

<style>
	main {
		display: grid;
		place-content: center;
		min-height: 100dvh;
	}
</style>
