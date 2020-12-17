<script>  
	import {Route} from 'tinro';	
	import {mainRoutes} from '@routing/routes';
	import { blur } from 'svelte/transition';
	import { hide } from '@services/hideSidebarOnFallback';
	function updateHide() {
		hide.update(v => 'invisible');
	}	
</script>
<style>
	
</style>
<Route>
	{#each mainRoutes as route }			
		<Route path="{route.url}">	
			<div id="mainArea" in:blur="{{duration:1500}}"			
			class="w-full min-h-full h-full p-5 bg-primary-main_bg text-primary-main_text
			md:flex-auto md:w-4/5">		
				<svelte:component this={route.component} />	
			</div>		
		</Route>	
	{/each}	
	<Route fallback>
		<div class="invisible">{updateHide()}</div>
	</Route>
</Route>
