import { defineStore } from 'pinia'
import type { goods } from './components/NewArrivalsItem.vue'

export const useGoodsStore = defineStore('goods', {
  state: () => {
    const stateItem: { goodsCart: goods[] } = { goodsCart: [] }
    return stateItem
  },
  getters: {
    //...
  },
  actions: {
    addGoods(item: goods) {
      let flag = false
      for (let i = 0; i < this.goodsCart.length; i++) {
        if (this.goodsCart[i].title == item.title) {
          flag = true
        }
      }
      if (flag) {
        for (let i = 0; i < this.goodsCart.length; i++) {
          if (this.goodsCart[i].title == item.title) this.goodsCart[i].amount += 1
        }
      } else {
        this.goodsCart.push({ ...item, amount: 1 })
      }
      console.log(this.goodsCart)
    },
    removeGoods(item: goods) {
      let shit = 0
      for (let i = 0; i < this.goodsCart.length; i++) {
        if (this.goodsCart[i].title == item.title) {
          shit = i
          break
        }
      }
      this.goodsCart.splice(shit, 1)
    },
    decrementGoods(item: goods) {
      for (let i = 0; i < this.goodsCart.length; i++) {
        if (this.goodsCart[i].title == item.title)
          if (this.goodsCart[i].amount > 1) this.goodsCart[i].amount -= 1
      }
      console.log(this.goodsCart)
    }
  }
})
