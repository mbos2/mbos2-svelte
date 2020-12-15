<script>
    import { fade } from 'svelte/transition';
	import {Route} from 'tinro';	
	import {mainRoutes} from '@routing/routes';
	export let testClass;
</script>

{#each mainRoutes as route }			
	<Route path="{route.url}">	
		<div 
		in:fade="{{ delay:200, duration: 200}}" 
		out:fade="{{duration: 200 }}" 
		class="w-full min-h-full h-full overflow-auto p-5 
		md:flex-auto md:w-4/5 
		{testClass}">
			<svelte:component this={route.component} />	
		</div>
	</Route>	
{/each}
