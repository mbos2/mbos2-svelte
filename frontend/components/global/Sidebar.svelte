<script lang="ts">
    import Navigation from '@global/Navigation.svelte';
    import ImageComponent from '@global/ImageComponent.svelte';
    import Footer from '@global/Footer.svelte';   
    import { hide } from '@services/hideSidebarOnFallback';
 
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

    let hideValue;
    const unsubscribe = hide.subscribe(value => {
      hideValue = value;
    });

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
    background: rgb(128,204,255);
    background: linear-gradient(45deg, rgba(44,55,71,1) 5%, rgba(128,204,255,1) 6.5%, rgba(44,55,71,1) 8%, rgba(41,50,65,1) 92%, rgba(128,204,255,1) 93.5%, rgba(41,50,65,1) 95%);
  }
  button {      
    font-size:40px;
    outline: 0;
    color: #ff9500;
  }
</style>

<aside class="{hideValue} sidebar flex flex-col w-3/5 h-full absolute z-10 overflow-x-hidden text-primary-lightblue
            sm:shadow-none
            md:relative md:w-2/6 md:shadow-md md:font-semibold
            lg:w-2/6
            xl:w-1/6
            {openClass} ">
  <ImageComponent />
  <Navigation on:urlClick={toggleNavigation}/>    
  <Footer /> 
</aside>
<button class="flex z-20 absolute right-4 top-3 p-1
              md:hidden" 
on:click="{toggleNavigation}">{@html buttonContent}</button>