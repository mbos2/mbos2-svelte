<script>
    import {currentComponent} from './services/routing';
    import About from '$components/About.svelte';
	  import Blog from '$components/Blog.svelte';
	  import Projects from '$components/Projects.svelte';
    import Home from '$components/Home.svelte';
    import Contact from '$components/Contact.svelte';
    let routes = [    
        {
            id: 1,
            route: '/home',
            name: 'Home',
            component: Home,
            iconClass: "fas fa-home"
        },
        {
            id: 2,
            route: '/about',
            name: 'About',
            component: About,
            iconClass: "fas fa-address-card"
        },
        {
            id: 3,
            route: '/projects',
            name: 'Projects',
            component: Projects,
            iconClass: "fas fa-tasks"
        },
        {
            id: 4,
            route: '/blog',
            name: 'Blog',
            component: Blog,
            iconClass: "fas fa-rss"
        },
        {
            id: 5,
            route: '/contact',
            name: 'Contact',
            component: Contact,
            iconClass: "fas fa-envelope-square"
        }       
    ];
    let isActive = false;
    function setNavigationStates(route) {
        currentComponent.set(route);
        isActive = true;         
    }  
</script>
<style>
a {
   color: inherit;
}
.expandmenu {
   display: none;
}

.menu-item,
.expandmenu-button {
   background: #EEEEEE;
   border-radius: 100%;
   width: 100px;
   height: 100px;
   line-height: 100px;
   margin-left: -50px;
   position: absolute;
   color: #FFFFFF;
   text-align: center;
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
   -webkit-transition: -webkit-transform ease-out 200ms;
   transition: -webkit-transform ease-out 200ms;
   transition: transform ease-out 200ms;
   transition: transform ease-out 200ms, -webkit-transform ease-out 200ms;
}

.menu {  
   text-align: center;
   box-sizing: border-box;
   font-size: 36px;   
}

.menu-item:hover {
   background: #EEEEEE;
   color: #3290B1;
}

.menu-item:nth-child(3) {
   -webkit-transition-duration: 180ms;
   transition-duration: 180ms;
}

.menu-item:nth-child(4) {
   -webkit-transition-duration: 180ms;
   transition-duration: 180ms;
}

.menu-item:nth-child(5) {
   -webkit-transition-duration: 180ms;
   transition-duration: 180ms;
}

.menu-item:nth-child(6) {
   -webkit-transition-duration: 180ms;
   transition-duration: 180ms;
}

.menu-item:nth-child(7) {
   -webkit-transition-duration: 180ms;
   transition-duration: 180ms;
}

.menu-item:nth-child(8) {
   -webkit-transition-duration: 180ms;
   transition-duration: 180ms;
}

.menu-item:nth-child(9) {
   -webkit-transition-duration: 180ms;
   transition-duration: 180ms;
}

.expandmenu-button {
   z-index: 2;
   -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
   transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
   -webkit-transition-duration: 400ms;
   transition-duration: 400ms;
   -webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);
   transform: scale(1.1, 1.1) translate3d(0, 0, 0);
   cursor: pointer;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   color: rgba(50,130,184,1);
}

.expandmenu-button:hover {
   -webkit-transform: scale(1.2, 1.2) translate3d(0, 0, 0);
   transform: scale(1.2, 1.2) translate3d(0, 0, 0);
}

.expandmenu:checked + .expandmenu-button {
   -webkit-transition-timing-function: linear;
   transition-timing-function: linear;
   -webkit-transition-duration: 200ms;
   transition-duration: 200ms;
   -webkit-transform: scale(0.8, 0.8) translate3d(0, 0, 0);
   transform: scale(0.8, 0.8) translate3d(0, 0, 0);
}

.expandmenu:checked ~ .menu-item {
   -webkit-transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
   transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
}

.expandmenu:checked ~ .menu-item:nth-child(3) {
   transition-duration: 180ms;
   -webkit-transition-duration: 180ms;
   -webkit-transform: translate3d(0.08361px, -104.99997px, 0);
   transform: translate3d(0.08361px, -104.99997px, 0);
}

.expandmenu:checked ~ .menu-item:nth-child(4) {
   transition-duration: 280ms;
   -webkit-transition-duration: 280ms;
   -webkit-transform: translate3d(90.9466px, -52.47586px, 0);
   transform: translate3d(90.9466px, -52.47586px, 0);
}

.expandmenu:checked ~ .menu-item:nth-child(5) {
   transition-duration: 380ms;
   -webkit-transition-duration: 380ms;
   -webkit-transform: translate3d(90.9466px, 52.47586px, 0);
   transform: translate3d(90.9466px, 52.47586px, 0);
}

.expandmenu:checked ~ .menu-item:nth-child(6) {
   transition-duration: 480ms;
   -webkit-transition-duration: 480ms;
   -webkit-transform: translate3d(0.08361px, 104.99997px, 0);
   transform: translate3d(0.08361px, 104.99997px, 0);
}

.expandmenu:checked ~ .menu-item:nth-child(7) {
   transition-duration: 580ms;
   -webkit-transition-duration: 580ms;
   -webkit-transform: translate3d(-90.86291px, 52.62064px, 0);
   transform: translate3d(-90.86291px, 52.62064px, 0);
}

.expandmenu:checked ~ .menu-item:nth-child(8) {
   transition-duration: 680ms;
   -webkit-transition-duration: 680ms;
   -webkit-transform: translate3d(-91.03006px, -52.33095px, 0);
   transform: translate3d(-91.03006px, -52.33095px, 0);
}

.expandmenu:checked ~ .menu-item:nth-child(9) {
   transition-duration: 780ms;
   -webkit-transition-duration: 780ms;
   -webkit-transform: translate3d(-0.25084px, -104.9997px, 0);
   transform: translate3d(-0.25084px, -104.9997px, 0);
}

.col1 {
   background-color: #24BCFC;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.col1:hover {
   color: #24BCFC;
   text-shadow: none;
}

.col2 {
   background-color: #FF3A3D;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.col2:hover {
   color: #FF3A3D;
   text-shadow: none;
}

.col3 {
   background-color: #FFC431;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.col3:hover {
   color: #FFC431;
   text-shadow: none;
}

.col4 {
   background-color: #FF670C;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.col4:hover {
   color: #FF670C;
   text-shadow: none;
}

.col5 {
   background-color: #35FFD6;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.col5:hover {
   color: #35FFD6;
   text-shadow: none;
}

.col6 {
   background-color: #0340D0;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.col6:hover {
   color: #0340D0;
   text-shadow: none;
}

@media screen and (max-width: 700px) {
   body {
      padding: 170px 0 0 0;
      width: 100%
   }
}
</style>
<nav class="menu">
  <input type="checkbox" href="#" class="expandmenu" name="expandmenu" id="expandmenu" />
  <label class="expandmenu-button" for="expandmenu"><i class="fas fa-bars"></i></label>

  {#each routes as route}    
    <a
      on:click={() => setNavigationStates(route)}
      class="menu-item col{route.id}">
      <i class="{route.iconClass}"></i>
    </a>       
  {/each} 
  <a href="https://github.com/mbos2" target="blank" class="menu-item col6"><i class="fab fa-github"></i></a>
</nav>