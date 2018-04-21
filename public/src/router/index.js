import Vue from 'vue'
import Router from 'vue-router'
//@ts-ignore
import Home from '@/components/Home'
import Purchase from '@/components/Purchase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/purchase',
      name: 'Purchase',
      component: Purchase
    }
  ]
})
