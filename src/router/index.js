import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'


// 主页
const mainWork = r => require.ensure([], () => r(require('../pages/main/index.vue')),'mainWork')
//滑屏主页
const mainWorks = r => require.ensure([], () => r(require('../pages/touchMain/index.vue')),'mainWorks')

const routerChild = r => require.ensure([], () => r(require('../components/routerChild.vue')),'routerChild')

Vue.use(Router)
const routes = [{
  path:'/',component:App,
  children:[
    { path: "",redirect:"/mainWork" },
    { path: "/mainWork",component: mainWork},
    { path: "/mainWorks",component: mainWorks},
    //我的页面 的子路由
    { path: "/mainMy",component:routerChild,
      children:[
        {path:'/',component:mainWork},
      ]
    }
  ]
}]

export default new Router({
    routes,linkActiveClass:"my-active"
})
