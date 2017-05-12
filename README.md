# vue2_app_template

# 项目搭建



                      $ git clone https://github.com/raintao/vue2_app_template.git
                      $ cnpm install
                      $ npm run dev   

## 所用的技术架构
### vue+vuex+vue-resource
#### [vue2官网](https://cn.vuejs.org/v2/guide/ "vuejs官网")
#### [vuex](https://vuex.vuejs.org/zh-cn/api.html)  
#### [vue-router](https://router.vuejs.org/zh-cn/)
#### [官方命令行工具vue-cli](https://github.com/vuejs/vue-cli)  
### UI [mnit-ui](http://mint-ui.github.io/docs/#/)   [muse-ui](http://www.muse-ui.org/#/usage)
### 交互 [axios](https://www.awesomes.cn/repo/mzabriskie/axios),[github地址](https://github.com/raintao/axios)
### icon [material icons](https://material.io/icons/#ic_class)
### 打包平台 [HBuild](http://www.html5plus.org/doc/h5p.html)
### css预编译[less](http://less.bootcss.com/)    

              static文件夹主要放一些图片,第三方文件。src中的目录如下：
                |-- App.vue  
                |-- components  单文件组件文件夹
                |-- diy         封装的api 接口等
                |-- main.js     入口文件
                |-- pages       页面
                |-- public      css重置、统一制定主题、样式等css文件
                |-- router      路由文件
                |-- store       vuex


#### 默认配置为基于iphone6的设计稿，1rem=100px,即1px=0.01rem；
#### 字体、border用px，布局用rem，固定定位的header、footer建议也用px布局；
#### 另本模版对于mintUI和museUI组件按需引入的webpack已配好，less语法等，对于es6语法不会提醒
