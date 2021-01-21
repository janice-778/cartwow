import Vue from 'vue'
import VueRouter from 'vue-router'
const app = () => import("@/App");  //页面
const cart = () => import("@/tar/cart/cart"); //购物车
const my = () => import("@/tar/my/my"); //我的
const scang = () => import("@/tar/scang/scang"); //收藏
const shouy = () => import("@/tar/shouy/shouy"); //首页
const detail = () => import("@/tar/detail/detail"); //详情页
Vue.use(VueRouter)

const routes = [
   //tar页面
   {
    path: '/app',
    name: 'app',
    component: app,
    children:[
      //购物车
        {
          path: 'cart',
          name: 'cart',
          component: cart
        },
      //我的
        {
          path: 'my',
          name: 'my',
          component: my
        },
      //收藏
        {
          path: 'scang',
          name: 'scang',
          component: scang
        },
      //首页
        {
          path: 'shouy',
          name: 'shouy',
          component: shouy
        },
        //首页
        {
          path: '/detail/:iid',
          name: 'detail',
          component: detail
        }
    ]
  },
  // {
  //   path: '/my',
  //   name: 'my',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('@/tar/my/my')
  // }
]

const router = new VueRouter({
  mode: "history", //去除哈希值的#号
  routes
})

export default router
