import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import index from '@/components/index'
import live from '@/components/live'
import frmTrade from '@/components/frmTrade'
import my from '@/components/my'
import comingSoon from '@/components/comingSoon'
import first from '@/components/first'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: first,
      redirect: '/index',
    },
    {
      path: '/first',
      name: 'first',
      component: first,
      
      children:[
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
          path: '/live',
          name: 'live',
          component: live
        },
        {
          path: '/frmTrade',
          name: 'frmTrade',
          component: frmTrade
        },
        {
          path: '/my',
          name: 'my',
          component: my
        }
      ]
    },
    {
      path: '/comingSoon',
      name: 'comingSoon',
      component: comingSoon
    }
  ]
})
