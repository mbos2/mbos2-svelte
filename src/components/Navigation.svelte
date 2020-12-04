<script>
import { loop_guard } from 'svelte/internal';

    import {currentComponent} from './services/routing';
    import About from '$components/About.svelte';
	import Blog from '$components/Blog.svelte';
	import Projects from '$components/Projects.svelte';
    import Home from '$components/Home.svelte';
    import Contact from '$components/Contact.svelte';
    let routes = [    
        {
            id: 0,
            route: '/home',
            name: 'Home',
            component: Home
        },
        {
            id: 1,
            route: '/projects',
            name: 'Projects',
            component: Projects
        },
        {
            id: 2,
            route: '/about',
            name: 'About',
            component: About
        },
        {
            id: 3,
            route: '/blog',
            name: 'Blog',
            component: Blog
        },
        {
            id: 4,
            route: '/contact',
            name: 'Contact',
            component: Contact
        }
    ];
    let isActive = false;
    function setNavigationStates(route) {
        currentComponent.set(route);
        isActive = true;         
    }  
</script>
<style>
nav {
  max-width: 100%;
  mask-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(34, 40, 49, 1) 25%, rgba(34, 40, 49, 1) 75%, rgba(255, 255, 255, 0) 100%);
  margin: 0 auto; 
}

nav ul {
  text-align: center;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(34, 40, 49, 1) 25%, rgba(34, 40, 49, 1) 75%, rgba(34, 40, 49, 0) 100%);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(34, 40, 49, 1);  
}

nav ul li {
  display: inline-block;
}

nav ul li a {
  padding: 18px;
  font-family: "Open Sans";
  text-transform:uppercase;
  color: rgba(254, 253, 202, 1);
  font-size: 18px;
  text-decoration: none;
  display: block;
}

nav ul li a:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 222, 125, 1);
}

.active {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 222, 125, 1);
}
</style>
<nav>
    <ul>
        {#each routes as route}
        <li>
            <a
            on:click={() => setNavigationStates(route)}
            class="{isActive ? 'active' : ''}">{route.name}</a>
        </li>
        {/each}       
    </ul>
</nav>