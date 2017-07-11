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

retina() // 1px 处理方案


//滑屏主页
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

new Vue({
    el: "#app",
    router,
    store,
    render:(h)=>h(App)
})
