<script>
	import Footer from './Footer.svelte'
	import '../app.postcss';
</script>

<main class="grid place-content-center">
	<slot />
</main>
<Footer />

<style>
	:global(body) {
		@apply grid grid-rows-[1fr_auto] gap-4 h-screen;
	}
</style>
