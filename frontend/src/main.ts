import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import Login from './components/Login.vue'
import HomePage01 from './components/HomePage01.vue'
import Cart from './components/Cart.vue'
const app = createApp(App)
const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home1',
      name: 'home1',
      component: HomePage01
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ],
  history: createWebHistory()
})
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
