<script lang='typescript'>
	import {Route} from 'tinro';	
    import {mainRoutes} from '@components/routing/routes';
	import Navigation from '@components/global/Navigation.svelte';
</script>  

<style>

</style>
<Navigation />
<div class="a">
	{#each mainRoutes as route }		
		<Route path="{route.url}">	
			<svelte:component this={route.component} />		
		</Route>	
	{/each}
</div>