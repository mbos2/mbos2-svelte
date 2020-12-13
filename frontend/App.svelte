<script lang='typescript'>
	import Tailwindcss from './Tailwindcss.svelte';
	import Sidebar from '@components/global/Sidebar.svelte';
	import Main from '@components/global/Main.svelte';
</script>  

<style global>
	h1 {
		color: red;
	}

	.testSidebar {
		background-color: cornflowerblue;
	}
	.testMain {
		background-color: burlywood;
	}
</style>

<div class="flex flex-col md:flex-row">
	<Sidebar testClass="testSidebar"/>
	<Main testClass="testMain"/>
</div>