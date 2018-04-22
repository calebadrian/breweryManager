import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import swal from 'sweetalert2'
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
      component: Purchase,
      beforeEnter: (to, from, next) => {
        if (!from.name) {
          store.dispatch('authenticate')
          next()
        } else if (!store.state.user.name && from.name) {
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'Please login to continue!'
          })
          next(false)
        } else {
          next()
        }
      }
    }
  ]
})
