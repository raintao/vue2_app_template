import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import Axios from './diy/axios'

Vue.prototype.$http = Axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等

// 第三方jquery
import '../static/js/zepto.min.js'
// css reset UI框架里面有了,但是mint-ui沒有
import './public/reset.css'
// 字体图标
import './public/font/font-awesome.min.css'

// 全部加载ui框架

// muse-ui
// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
// import './public/theme.less'
// Vue.use(MuseUI)

// mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

// 按需加载
// muse-ui  base.less加载基础的样式
// import 'muse-components/styles/base.less'
// import appBar from 'muse-components/appBar'
// import iconButton from 'muse-components/iconButton'
// import flatButton from 'muse-components/flatButton'
// import avatar from 'muse-components/avatar'
// import {bottomNav, bottomNavItem} from 'muse-components/bottomNav'
// import {retina} from 'muse-components/utils'

// retina() // 1px 处理方案

// Vue.component(appBar.name, appBar)
// Vue.component(iconButton.name, iconButton)
// Vue.component(flatButton.name, flatButton)
// Vue.component(avatar.name, avatar)
// Vue.component(bottomNav.name, bottomNav)
// Vue.component(bottomNavItem.name, bottomNavItem)


// mint-ui
// import { Button } from 'mint-ui';
// Vue.component(Button.name, Button);
//
// import { Swipe, SwipeItem } from 'mint-ui'
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
//
// import { Navbar, TabItem } from 'mint-ui';
// import { TabContainer, TabContainerItem } from 'mint-ui';
// import { Cell } from 'mint-ui';
// Vue.component(Cell.name, Cell);
// Vue.component(TabContainer.name, TabContainer);
// Vue.component(TabContainerItem.name, TabContainerItem);
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);

//滑屏主页
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

new Vue({
    el: "#app",
    router,
    store,
    render:(h)=>h(App)
})
