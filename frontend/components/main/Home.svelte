<script>
  const skills = {
      css: {
          progress: 0.50
      }
  }
</script>
<style>
      h1 {
        display: inline-block;
        position: relative;   
        float:right;     
        padding-bottom: 3px;
        font-family: Papyrus,fantasy; 
    }

    h1:after {
        content: '';
        display: flex;        
        height: 2px;
        width: 0px;
        background: #ff9500;  
        -webkit-animation-name: border; /* Safari 4.0 - 8.0 */
        -webkit-animatin-duration: 3s; /* Safari 4.0 - 8.0 */
        -webkit-animation-fill-mode: forwards; /* Safari 4.0 - 8.0 */
        animation-name: border;
        animation-duration: 3s;        
        animation-fill-mode: forwards;
    }

    @-webkit-keyframes border {
        from {width: 0px;}
        to {width:100%}
    }

    .box {
        border: 2px solid #ff9500;
        font-family: Papyrus,fantasy; 
    }

</style>

<header class="flex flex-row-reverse">
    <h1 class="flex text-md text-primary-dark my-10 italic
    sm:text-xl
    md:text-3xl md:my-0
    lg:text-6xl">"Home is not a place . . . it's a feeling."</h1>
</header>
<main class="">
    <section class="">
        <header class="">
        <h2>ABOUT ME</h2>
        </header>
    </section>   
</main>
