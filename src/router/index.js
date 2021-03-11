import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
// import Layout from '@/layout'


const constantRoutes = [
    {
        path:'/',
        name:'home',
        component: () => import('@/views/home/index.vue')
    }
]


export default new Router({
    mode: 'history', // 去掉url中的#
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
  })