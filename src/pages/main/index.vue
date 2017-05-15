<template>
  <div class="main">
    <div class="compent"><component :is="currentView"></component></div>
    <p style="font-size:24px;margin-top:200px;text-align:center;" @click="jump">跳转滑屏主页</p>
    <div class="footer">
      <div :class="{active:mainMsgIsActive}"  class="footerNav" @click="pageChange('mainMsg')">
        <p><i class="material-icons">message</i></p>
  			<p>消息</p>
      </div>
      <div :class="{active:mainWorkIsActive}" class="footerNav" @click="pageChange('mainWork')">
        <p><i class="material-icons">work</i></p>
  			<p>工作</p>
      </div>
      <div :class="{active:mainContactsIsActive}" class="footerNav" @click="pageChange('mainContacts')">
        <p><i class="material-icons">people_outline</i></p>
  			<p>联系人</p>
      </div>
      <div :class="{active:mainMyIsActive}" class="footerNav" @click="pageChange('mainMy')">
        <p><i class="material-icons">person_outline</i></p>
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
            currentView:mainWork,
            mainWorkIsActive:true,
            mainContactsIsActive:false,
            mainMyIsActive:false,
            mainMsgIsActive:false
        }
    },
    components:{
      mainWork,
      mainMsg,
      mainContacts,
      mainMy
    },
    methods:{
      pageChange:function(url){
        this.currentView=url;
        this.mainWorkIsActive=false;
        this.mainContactsIsActive=false;
        this.mainMyIsActive=false;
        this.mainMsgIsActive=false;
        switch(url){
          case "mainWork":this.mainWorkIsActive=true;break;
          case "mainMsg":this.mainMsgIsActive=true;break;
          case "mainContacts":this.mainContactsIsActive=true;break;
          case "mainMy":this.mainMyIsActive=true;break;
        }
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
			vertical-align: middle;
			padding-bottom:8px;
			color:@fontColor;
			text-decoration:none;
			p{
			  margin-top:5px;
        >i{
          font-size: 18px;
        }
				&:nth-of-type(2){
				  margin-top:0;
					font-size:12px;
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
