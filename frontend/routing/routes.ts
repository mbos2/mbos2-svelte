import Home from '@components/main/Home.svelte';
import About from '@components/main/About.svelte';
import Projects from '@components/main/Projects.svelte';
import Blog from '@components/main/Blog.svelte';
import Contact from '@components/main/Contact.svelte';
export const mainRoutes = [
    {
        id: 1,
        url: '/',
        name: 'Home',
        component: Home
    },
    {
        id: 2,
        url: '/about',
        name: 'About',
        component: About
    },
    {
        id: 3,
        url: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        id: 4,
        url: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        id: 5,
        url: '/contact',
        name: 'Contact',
        component: Contact
    }
]