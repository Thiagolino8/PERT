<script lang="ts">
	import type { Writable } from "svelte/store";

	type T = $$Generic
	export let form: Writable<T>
</script>

<slot superForm={$form}/>