import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Chatroom from '@/pages/Chatroom.vue'
import NotFound from '@/pages/NotFound.vue'
import Login from '@/pages/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login/:id',
    name: 'Login',
    component: Login
  },
  {
    path: '/chatroom/:id',
    name: 'Chatroom',
    component: Chatroom
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router