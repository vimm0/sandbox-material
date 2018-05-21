import Vue from 'vue'
import Router from 'vue-router'
import Google from '@/components/google'
import SassPractice from '@/components/SassPractice'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Google',
      component: Google
    },
    {
      path: '/sass',
      name: 'SassPractice',
      component: SassPractice
    }
  ]
})
