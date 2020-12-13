<script>
    import { fade } from 'svelte/transition';
	import {Route} from 'tinro';	
    import {mainRoutes} from '@components/routing/routes';
</script>

{#each mainRoutes as route }		
	<Route path="{route.url}">	
		<div in:fade="{{ delay:1000, duration: 1000}}" out:fade="{{duration: 1000 }}">
			<svelte:component this={route.component} />	
		</div>
	</Route>	
{/each}
