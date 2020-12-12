<script> 
    import {mainRoutes} from '../routing/routes';
</script>

<nav>
	{#each mainRoutes as route }		
		<a href="{route.url}">{route.name}</a> 	
	{/each}
</nav>
