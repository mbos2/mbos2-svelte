<script> 
	import {mainRoutes} from '@routing/routes';	
	import { createEventDispatcher } from 'svelte';
	let lastActiveElement;
	let activeClass;

	const dispatch = createEventDispatcher();
	function closeNav() {
		dispatch('urlClick', {
			text: 'closed'			
		});
	}

	function setActiveOnCurrent (element) {
		let el = document.getElementById(element.srcElement.id);		
		el.classList.add('active');
		lastActiveElement = element.srcElement;
	}

	function removeActiveFromLast () {		
		if(lastActiveElement === null || lastActiveElement === undefined) {
			return;
		}
		let el = document.getElementById(lastActiveElement.id);		
		el.classList.remove('active');		
	}

	function navBehaviourWrapper(e) {
		closeNav();
		removeActiveFromLast ();
		setActiveOnCurrent(e)
	}
</script>
<style>
	.anchor {
		border:2px solid #99d6ff;
		transition: box-shadow 0.1s;
	}
	.anchor:hover {
		-webkit-box-shadow: 0px 0px 5px 2px rgba(128,204,255,1);
		-moz-box-shadow: 0px 0px 5px 2px rgba(128,204,255,1);
		box-shadow: 0px 0px 5px 2px rgba(128,204,255,1);
	}
	.active {
		background-color: #80CCFF;
		color: #293241;	
		transition: 0.3s;
	}
	.active:focus {
		-webkit-box-shadow: 0px 0px 5px 2px rgba(128,204,255,1);
		-moz-box-shadow: 0px 0px 5px 2px rgba(128,204,255,1);
		box-shadow: 0px 0px 5px 2px rgba(128,204,255,1);
	}

</style>
<nav class="flex flex-col text-center justify-center items-center h-2/5 space-y-4">
	{#each mainRoutes as route, i }		
		<a id="link-{route.id}" class="anchor uppercase rounded p-2 w-2/3 md:w-2/3 {activeClass}" href="{route.url}" 
		on:click={navBehaviourWrapper}>{route.name}</a> 	
	{/each}
</nav>
