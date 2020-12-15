<script> 
	import {mainRoutes} from '@routing/routes';	
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function closeNav() {
		dispatch('urlClick', {
			text: 'closed'
		});
	}
</script>
<style>

</style>
<nav class="flex flex-col text-center justify-center items-center h-2/5">
	{#each mainRoutes as route }		
		<a href="{route.url}" on:click="{closeNav}">{route.name}</a> 	
	{/each}
</nav>
