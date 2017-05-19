<template>
  <div class="main">
    <div class="compent"><component :is="currentView"></component></div>
    <p style="font-size:24px;margin-top:200px;text-align:center;" @click="jump">跳转滑屏主页</p>
    <div class="footer">
      <div class="footerNav" @click="pageChange($event,'mainMsg')">
        <p><i class="icon-comment-alt"></i></p>
  			<p>消息</p>
      </div>
      <div class="footerNav active" @click="pageChange($event,'mainWork')">
        <p><i class="icon-th-large"></i></p>
  			<p>工作</p>
      </div>
      <div class="footerNav" @click="pageChange($event,'mainContacts')">
        <p><i class="icon-group"></i></p>
  			<p>联系人</p>
      </div>
      <div class="footerNav" @click="pageChange($event,'mainMy')">
        <p><i class=" icon-user"></i></p>
  			<p>我的</p>
      </div>
    </div>
  </div>
</template>
<script>
  import router from '../../router'
  import mainWork from './work'
  import mainMsg from './msg'
  import mainContacts from './contacts'
  import mainMy from './my'
	export default{
		name: 'maindex',
    data:function(){
        return {
            currentView:mainWork
        }
    },
    components:{
      mainWork,
      mainMsg,
      mainContacts,
      mainMy
    },
    methods:{
      pageChange:function(e,url){
        this.currentView=url
        $(e.currentTarget).addClass("active").siblings(".active").removeClass("active")
      },
      jump(){
				router.push('/mainWorks')
			}
    }
	}
</script>
<style lang='less' scoped>
  @import  '../../public/comment.less';
	.footer{
		position:fixed;
    height:50px;
		bottom:0;
		left:0;
		width:100%;
		z-index:333;
		border-top:1px solid @borderColor;
		display:flex;
    justify-content: center;
    align-items:center;
    align-content:center;
		background:@white;
		.footerNav{
			flex:1;
			text-align: center;
			padding-bottom:8px;
			color:@fontColor;
			p{
			  margin-top:8px;
        >i{
          font-size: 18px;
        }
				&:nth-of-type(2){
				  margin-top:2px;
          height: 14px;
				}
			}
		}
		.footerNav.active{
	      color:@lightBlue;
    		text-decoration:none;
	    }

	}

</style>
