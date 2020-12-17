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

<div>
    <h1 class="flex text-xl italic md:text-3xl lg:text-4xl my-10 md:my-0 ">One message can make a friend.</h1>
</div>