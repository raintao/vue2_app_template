import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'


// 主页
const index = r => require.ensure([], () => r(require('../pages/main/index.vue')),'index')
//滑屏主页
const mainWorks = r => require.ensure([], () => r(require('../pages/touchMain/index.vue')),'mainWorks')

const routerChild = r => require.ensure([], () => r(require('../components/routerChild.vue')),'routerChild')

Vue.use(Router)
const routes = [{
  path:'/',component:App,
  children:[
    { path: "",redirect:"/index" },
    { path: "/index",component: index},
    { path: "/mainWorks",component: mainWorks},
    // 采购商
    { path: "/buyer",component:routerChild,
      children:[
        {path:'',component:mainWork,meta:{requiresAuth:true,uid:1}},
      ]
    },
    // 供应商
    { path: "/suplier",component:routerChild,
      children:[
        {path:'',component:mainWork,meta:{requiresAuth:true,uid:0}},
      ]
    }
  ]
}]

const router= new Router({
    routes,linkActiveClass:"my-active"
})
router.beforeEach((to,from,next)=>{
  var accessToken=localStorage.getItem('access_toke')
    if(accessToken){
      // if(to.path==='/login'||to.path==='/register'||to.path==='/resetPwd'){
      //   if(user&&user!='null'){
      //     //console.log("用户信息的cookie存在")
      //     if(user.user_code == 1){
      //       next({path:'/main'})
      //     }else if(user.user_code == 0){
      //       next({path:'/supplier'})
      //     }
      //   }else{
      //     next()
      //   }
      // }else{
      //   next()
      // }
      next()
    }else{
      next({
        path: '/login',
        query: {redirect: to.fullPath}
        // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
}

export default router
