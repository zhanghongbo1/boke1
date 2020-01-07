import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path:"/",
    redirect:"/home",
  },
  {
    path:"/cooperation",
    name:"cooperation",
    component:() => import ('../views/cooperation.vue' )
  },
  
  {
    path:"/aboutme",
    name:"aboutme",
    component:() => import ('../views/aboutme.vue' )
  },
  {
    path:"/web",
    name:"web",
    component:() => import ('../views/web.vue' )
  },
  {
    path:"/technology",
    name:"technology",
    component:() => import ('../views/technology.vue' )
  },
  {
    path:"/mes",
    name:"mes",
    component:() => import ('../views/mes.vue' )
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
