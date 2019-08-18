import Vue from 'vue'
import Router from 'vue-router'
import myHeader from '@/components/header/myHeader'
import goods from '@/components/goods/goods'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'myHeader',
      component: myHeader
    }, {
      path: '/',
      name: 'goods',
      component: goods
    }
  ],
  linkActiveClass: 'active'
})
