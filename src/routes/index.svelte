<script>	
	import Navigation from '$components/Navigation.svelte';
	import Footer from '$components/Footer.svelte';
	import layout from './_layout.svelte';

	import {currentComponent} from '$components/services/routing';

	let c = Object;
	const unsubscribe = currentComponent.subscribe(value => {
        c = value;
	})
	
</script>

<style>
.itemNavigation {
	grid-area: header; 
	grid-row: 1;
}
.itemMain { 
	grid-area: main; 
	grid-row: 2;
}
.itemFooter { 
	grid-area: footer; 	
	grid-row: 3;	
	text-align: center;	
}
.grid-container {  	
	display: grid;		
	grid-template-columns: 100%;
	grid-template-rows: 10% 85% 5%;
	grid-template-areas: 
    "header"
    "main"
	"footer";
	height: 99.9vh;	
	margin: auto;	
}

.grid-container > div {  
  padding: 20px 0; 
}
</style>

<div class="container mx-auto px-1 grid-container">

	<!-- <div class="itemNavigation"><Navigation /></div> -->

	<div class="itemMain">	
		<svelte:component this={c.component}/>
	</div>	
	<div class="itemFooter">
		<Footer/>
	</div>

</div>