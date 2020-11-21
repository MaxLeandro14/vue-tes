import Vue from 'vue'
import Router from 'vue-router'
import Principal from '@/components/Principal.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'principal',
      component: Principal
    }
  ]
})
