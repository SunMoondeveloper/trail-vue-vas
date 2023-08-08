import Home from '../views/Home.vue'
//import Login from '../views/Login.vue'
//import Register from '../views/Register.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const history = createWebHashHistory()
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/static/Home.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/static/Login.vue'),
    meta: {
      layout: 'false'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/static/Register.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      layout: 'default'
    }
  }
]
const router = createRouter({
  linkActiveClass: 'active',
  history,
  routes
})

export { router }
