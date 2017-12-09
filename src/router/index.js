import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/IndexContent.vue'
import cart from '../components/cart.vue'
import fenlei from '../components/fenlei.vue'
import my from '../components/my.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },{
      path: '/index',
      component: index
    },{
      path:'/fenlei',
      component:fenlei
    },{
      path:'/cart',
      component:cart
    },{
      path:'/my',
      component:my
    }
  ]
})
