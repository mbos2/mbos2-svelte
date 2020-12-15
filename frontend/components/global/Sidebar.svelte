<script lang="ts">
    import Navigation from '@global/Navigation.svelte';
    import ImageComponent from '@global/ImageComponent.svelte';
    import Footer from '@global/Footer.svelte';
    export let testClass;

    let buttonContent = '<i class="fas fa-bars"></i>';  
    let openClass = 'closed';

    function closeNavigation(event) {
      openClass = event.detail.text;
    }
    
    const toggleNav = () => {
      if(openClass == 'closed') {       
        openClass = 'open';
        buttonContent = '<i class="fas fa-times"></i>';        
        return;
      } 
     
      openClass = 'closed';   
      buttonContent = '<i class="fas fa-bars"></i>';   
    }
</script>
<style>  
  @media (max-width: 767px) { 
    .open {
      transform: translateX(0);    
      transition: transform .3s;  
    }
    .closed {
      transform: translateX(-100%);   
      transition: transform .3s;       
    }
  }

  .b {
    background-color: cadetblue;
    color:red;
  }
  button {      
    font-size:40px;
  }
</style>

<section class="flex flex-col w-4/5 h-full absolute z-10
            md:relative md:w-1/5 md:z-0
            {testClass} {openClass} ">
  <ImageComponent />
  <Navigation on:urlClick={closeNavigation}/>    
  <Footer /> 
</section>
<button class="flex md:hidden z-20 absolute right-5 top-4" on:click="{toggleNav}">{@html buttonContent}</button>