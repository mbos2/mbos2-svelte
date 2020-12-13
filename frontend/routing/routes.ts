import Home from '@components/main/Home.svelte';
import About from '@components/main/About.svelte';
import Projects from '@components/main/Projects.svelte';
import Blog from '@components/main/Blog.svelte';
import Contact from '@components/main/Contact.svelte';
export const mainRoutes = [
    {
        url: '/',
        name: 'Home',
        component: Home
    },
    {
        url: '/about',
        name: 'About',
        component: About
    },
    {
        url: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        url: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        url: '/contact',
        name: 'Contact',
        component: Contact
    }
]