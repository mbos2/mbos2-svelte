<script>	
	import Navigation from '$components/Navigation.svelte';
	import Footer from '$components/Footer.svelte';
	import LogoArea from '$components/LogoArea.svelte';
	import layout from './_layout.svelte';
	import {currentComponent} from '$components/services/routing';

	let c = Object;
	const unsubscribe = currentComponent.subscribe(value => {
        c = value;
	})
	
</script>

<style>
.grid-container {
	display: grid;
	height: 100vh;
	grid-template-columns: 0.3fr 1.7fr;
	grid-template-rows: 1fr;
	gap: 0px 0px;
	grid-template-areas:
	"Side Main"; 
	grid-area: "Main";
	overflow: hidden;
}
.Main { 
	grid-area: Main; 
	background-color:  rgba(187,225,250,0.1);
	padding:2%;	
	min-width: 0;
	overflow-y: scroll;
}
.Side {  
  display: grid;  
  grid-template-columns: 100%;
  grid-template-rows: 20% 65% 15%;
  grid-template-areas:
    "Logo"
    "Bar"
	"Footer";	
  grid-area: Side;
  background-color:  rgba(187,225,250,0.1);
  max-width: 100%;
  overflow: hidden;
}
.Logo { grid-area: Logo;}
.Bar { grid-area: Bar; }
.Footer { grid-area: Footer;}
</style>

<div class="grid-container">
	<div class="Main">
		<svelte:component this={c.component}/>
	</div>
	<div class="Side">
	  <div class="Logo">
		<LogoArea />
	  </div>
	  <div class="Bar flex flex-wrap content-center justify-center">
		<Navigation />
	  </div>
	  <div class="Footer flex items-center">
		<Footer />
	  </div>
	</div>
</div>