<script>  
	import { blur } from 'svelte/transition';
	import Home from '@components/main/Home.svelte';
	export const component = Home;
</script>
<style>
	
</style>
	<main id="mainArea" in:blur="{{duration:1500}}"			
		class="w-full h-screen p-5 bg-primary-badge text-primary-main_text
		md:flex-auto md:w-4/5">		
			<svelte:component this={component} />	
	</main>		

