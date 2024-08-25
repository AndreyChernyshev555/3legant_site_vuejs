import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import type { goods } from './components/NewArrivalsItem.vue'
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
const store = createStore({
  state() {
    const stateItem: { goodsCart: goods[] } = { goodsCart: [] }
    return stateItem
  },
  mutations: {
    GOODS_ADD: (state, item) => {
      let copyState: goods[] = []
      let flag = false
      for (let i = 0; i < state.goodsCart.length; i++) {
        if (state.goodsCart[i].title == item.title) {
          flag = true
        }
      }
      if (flag) {
        for (let i = 0; i < state.goodsCart.length; i++) {
          let temp: goods = { ...state.goodsCart[i] }
          if (state.goodsCart[i].title == item.title) temp.amount += 1
          copyState.push(temp)
        }
        return copyState
      } else {
        return [
          ...state.goodsCart,
          {
            title: item.title,
            price: item.price,
            path: item.path,
            amount: 1
          }
        ]
      }
    },
    GOODS_REMOVE: (state, item) => {
      let copyState: goods[] = []
      for (let i = 0; i < state.goodsCart.length; i++) {
        if (state.goodsCart[i].title == item.title) continue
        let temp: goods = { ...state.goodsCart[i] }
        Object.assign(temp, state.goodsCart[i])
        copyState.push(temp)
      }
      return copyState
    },
    GOODS_DECREMENT: (state, item) => {
      let copyState: goods[] = []
      for (let i = 0; i < state.goodsCart.length; i++) {
        for (let i = 0; i < state.goodsCart.length; i++) {
          let temp: goods = { ...state.goodsCart[i] }
          if (state.goodsCart[i].title == item.title)
            if (state.goodsCart[i].amount > 1) temp.amount -= 1
          copyState.push(temp)
        }
        return copyState
      }
      return copyState
    }
  },
  getters: {
    // ...
  },
  actions: {
    addGoods(context, item) {
      context.commit('GOODS_ADD', item)
    },
    removeGoods(context, item) {
      context.commit('GOODS_REMOVE', item)
    },
    decrementGoods(context, item) {
      context.commit('GOODS_DECREMENT', item)
    }
  }
})

app.use(router)
app.use(store)
app.mount('#app')
