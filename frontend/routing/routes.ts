import Home from '@components/main/Home.svelte';
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
        url: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        id: 3,
        url: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        id: 4,
        url: '/contact',
        name: 'Get in touch',
        component: Contact
    }
]