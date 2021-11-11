import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Pages/Home.vue'
import About from "@/views/Pages/About";
import Services from "@/views/Pages/Services";
import Contact from "@/views/Pages/Contact";
import Portfolio from "@/views/Pages/Portfolio";
import Blog from "@/views/Pages/Blog";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
   component: About,
  },
  {
    path: '/services',
    name: 'Service',
    component: Services,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path:'/portfolio',
    name:'Portfolio',
    component:Portfolio

  }
  ,
  {
    path:'/blog',
    name:'Blog',
    component:Blog
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
