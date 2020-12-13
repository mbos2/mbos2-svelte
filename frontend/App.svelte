<script lang='typescript'>
	import { scale } from 'svelte/transition';
	import {Route} from 'tinro';	
    import {mainRoutes} from '@components/routing/routes';
	import Navigation from '@components/global/Navigation.svelte';
</script>  

<style global>
	h1 {
		color: red;
	}

	.bd {
		border: 1px solid red;
	}
</style>

<Navigation />
<div class="a">
	{#each mainRoutes as route }		
		<Route path="{route.url}">	
			<div in:scale="{{ duration: 2000}}" out:scale="{{duration: 2000 }}">
				<svelte:component this={route.component} />	
			</div>
		</Route>	
	{/each}
</div>