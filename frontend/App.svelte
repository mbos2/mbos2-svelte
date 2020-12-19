<script lang='typescript'>
	import Tailwindcss from './Tailwindcss.svelte';
	import Sidebar from '@global/Sidebar.svelte';
	import Main from '@global/Main.svelte';	
	import {Route} from 'tinro';	
	import {mainRoutes} from '@routing/routes';
	import { hide } from '@services/hideSidebarOnFallback';
	function updateHide() {
		hide.update(v => 'invisible');
	}
</script>  

<style global>

</style>

<main class="flex h-full md:h-screen flex-col md:flex md:flex-row-reverse">	
	<Route>
		{#each mainRoutes as route }			
			<Route path="{route.url}">	
				<Main component={route.component}/>	
			</Route>	
		{/each}	
		<Route fallback>
			<main class="invisible">{updateHide()}</main>
		</Route>
	</Route>	
	<Sidebar />	
</main>