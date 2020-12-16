<script lang="ts">
    import Navigation from '@global/Navigation.svelte';
    import ImageComponent from '@global/ImageComponent.svelte';
    import Footer from '@global/Footer.svelte';   
 
    //Navigation
    let buttonContent = '<i class="fas fa-bars"></i>';  
    let openClass = 'closed';

    function toggleNavigation (event)  {
      if(event.type == 'urlClick') {
        openClass = event.detail.text; 
        buttonContent ='<i class="fas fa-times"></i>';   
      } else {
          if(openClass == 'closed') {       
          openClass = 'open';
          buttonContent = '<i class="fas fa-times"></i>';        
          return;
        } 
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
  @media (min-width: 768px) {
    .sidebar {
      -webkit-box-shadow: 5px 0px 4px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 5px 0px 4px 0px rgba(0,0,0,0.75);
      box-shadow: 5px 0px 4px 0px rgba(0,0,0,0.75);
    }
  }
  .sidebar {
    background-color: #293241;
    /* color: #80CCFF; */
  }
  button {      
    font-size:40px;
  }
</style>

<section class="sidebar flex flex-col w-3/5 h-full absolute z-10 overflow-x-hidden text-sidebar-light
            sm:shadow-none
            md:relative md:w-2/6 md:shadow-md md:font-semibold
            lg:w-2/6
            xl:w-1/6
            {openClass} ">
  <ImageComponent />
  <Navigation on:urlClick={toggleNavigation}/>    
  <Footer /> 
</section>
<button class="flex z-20 absolute right-5 top-4 p-1
              md:hidden" 
on:click="{toggleNavigation}">{@html buttonContent}</button>