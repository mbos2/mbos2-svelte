<script lang="ts">
    import Navigation from '@components/global/Navigation.svelte';
    export let testClass;
    let isOpen = false;
    const openSideabr = () => {
       !isOpen ? isOpen = true : isOpen = false;
    }
</script>
<style>

</style>
<div class="flex sm:w-full {testClass}">
    <Navigation />
    <button>#</button>
</div>
