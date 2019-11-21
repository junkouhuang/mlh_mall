import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Home=resolve => require(['@/Home/Home'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      redirect:'/home'
    },
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path: '/login',
      name: '登录界面',
      component: () => import('@/Login/Login')
    },
    {
      path: '/medical',
      name: '家用医疗',
      component: () => import('@/Medical/Home')
    },
    {
      path: '/health',
      name: '营养健康',
      component: () => import('@/Health/Home')
    },
    {
      path: '/eyes',
      name: '靓眼世界',
      component: () => import('@/Eyes/Home')
    },
    {
      path: '/beautify',
      name: '美容养生',
      component: () => import('@/Beautify/Home')
    },
    {
      path: '/default',
      name: '缺省页',
      component: () => import('@/Default/Home')
    }
  ]
})
