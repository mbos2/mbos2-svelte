<script lang='typescript'>
	import Tailwindcss from './Tailwindcss.svelte';
	import Sidebar from '@global/Sidebar.svelte';
	import Main from '@global/Main.svelte';
</script>  

<style global>
	.testSidebar {
		background-color: cornflowerblue;
	}
	.testMain {
		background-color: burlywood;	
	}
</style>

<section class="flex h-screen flex-col md:flex md:flex-row-reverse">
	<Main testClass="testMain"/>
	<Sidebar testClass="testSidebar"/>
</section>