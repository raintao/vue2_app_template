<template>
  <header>
    <i class="material-icons" @click="goBack">arrow_back</i>
     <i v-if="closeSee" @click="closeWindow">x</i>
     <span>{{renderTitle}}</span>
     <slot></slot>
   </header>
</template>

<script>
// <header-view :headerObj="{title:renderTitle,path:'/other',count:0}"></header-view>
import router from '../../router'
export default {
  name:'headerX',
  props:['headerObj'],
  data:function(){
    return {
      title:'',
      count:0,
      closeSee:false,
      path:this.renderPath
    }
  },
  computed:{
    renderTitle:function(){
      this.path=this.headerObj.path || '/mainMsg';
      return this.title=this.headerObj.title
    }
  },
  methods:{
    goBack:function(){
      router.go(-1);
      //关闭当前页面用
      if(this.count>=2){this.closeSee=true;}
      this.count++;
    },
    closeWindow:function(){
      router.replace({ path:this.path});
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../public/comment.less';
  header{
    position: fixed;
    z-index: 100;
    left:0;top:0;
    height: 40px;
    width: 100%;
    border-bottom: 1px #ccc solid;
    font-size: 20px;
    background: #eee;
    >i{
      color:blue;
      font-style: normal;
      height: 40px;
      line-height: 40px;
      padding:0 4px;
      vertical-align: middle;
    }
    >span{
      border-left: 1px @borderColor solid;
      padding-left:.05rem;
    }
    >a{
      float: right;
      margin-right: .05rem;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      color:@lightBlue;
    }
  }
</style>
