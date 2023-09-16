<script lang="ts">
	import type { Writable } from "svelte/store";

	type T = $$Generic
	export let form: Writable<T>
	export let superForm: Writable<T>

	$: $superForm = $form
</script>

<slot/>