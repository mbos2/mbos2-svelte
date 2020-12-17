<script lang='typescript'>
	import Tailwindcss from './Tailwindcss.svelte';
	import Sidebar from '@global/Sidebar.svelte';
	import Main from '@global/Main.svelte';	
</script>  

<style global>

</style>

<section class="flex h-screen flex-col md:flex md:flex-row-reverse">	
	<Main />
	<Sidebar />	
</section>