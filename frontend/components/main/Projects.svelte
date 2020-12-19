<script>
  
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
</style>

<section>
    <h1 class="flex text-md my-10 text-primary-dark italic
    sm:text-xl
    md:text-3xl md:my-0
    lg:text-6xl">"Goals are dreams with deadlines."</h1>
</section>