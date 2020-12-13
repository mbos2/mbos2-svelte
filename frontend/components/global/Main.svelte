<script>
    import { fade } from 'svelte/transition';
	import {Route} from 'tinro';	
	import {mainRoutes} from '@frontend/routing/routes';
	export let testClass;
</script>

{#each mainRoutes as route }			
	<Route path="{route.url}">	
		<div in:fade="{{ delay:200, duration: 200}}" out:fade="{{duration: 200 }}" class="w-full {testClass}">
			<svelte:component this={route.component} />	
		</div>
	</Route>	
{/each}
