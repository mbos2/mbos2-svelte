<script>
    import { fade } from 'svelte/transition';
	import {Route} from 'tinro';	
	import {mainRoutes} from '@routing/routes';
	import { hide } from '@services/hideSidebarOnFallback';
	function updateHide() {
		hide.update(v => 'invisible');
	}	
</script>
<style></style>
<Route>
	{#each mainRoutes as route }			
		<Route path="{route.url}">	
			<div 
			class="w-full min-h-full h-full overflow-auto p-5 bg-primary-main_bg text-primary-main_text
			md:flex-auto md:w-4/5">		
				<svelte:component this={route.component} />	
			</div>		
		</Route>	
	{/each}	
	<Route fallback>
		<div class="invisible">{updateHide()}</div>
	</Route>
</Route>
