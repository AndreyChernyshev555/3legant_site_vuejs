import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import HomePage01 from './components/HomePage01.vue'

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
    }
  ],
  history: createWebHistory()
})

app.use(router)
app.mount('#app')
