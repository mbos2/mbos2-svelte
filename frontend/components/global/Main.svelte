<script>
    import { fade } from 'svelte/transition';
	import {Route} from 'tinro';	
	import {mainRoutes} from '@routing/routes';
	
</script>

{#each mainRoutes as route }			
	<Route path="{route.url}">	
		<div 
		class="w-full min-h-full h-full overflow-auto p-5 
		md:flex-auto md:w-4/5">
			<svelte:component this={route.component} />	
		</div>
	</Route>	
{/each}
