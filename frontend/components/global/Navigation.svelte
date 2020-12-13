<script> 
	import {mainRoutes} from '@frontend/routing/routes';
</script>

<nav class="flex sm:flex-row md:flex-col">
	{#each mainRoutes as route }		
		<a href="{route.url}">{route.name}</a> 	
	{/each}
</nav>
