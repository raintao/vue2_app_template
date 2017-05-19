<template>
  <div class="touchIndex">
    <swiper :options="swiperOption"  ref="mySwiper" style="height: auto">
        <swiper-slide><main-msg></main-msg></swiper-slide>
        <swiper-slide><main-work></main-work></swiper-slide>
        <swiper-slide><main-contacts></main-contacts></swiper-slide>
        <swiper-slide><main-my></main-my></swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
    <div class="footer">
      <div class="footerNav" @click="pageChange($event,0)">
        <p><i class="icon-comment-alt"></i></p>
  			<p>消息</p>
      </div>
      <div class="footerNav active" @click="pageChange($event,1)">
        <p><i class="icon-th-large"></i></p>
  			<p>工作</p>
      </div>
      <div class="footerNav" @click="pageChange($event,2)">
        <p><i class="icon-group"></i></p>
  			<p>联系人</p>
      </div>
      <div class="footerNav" @click="pageChange($event,3)">
        <p><i class=" icon-user"></i></p>
  			<p>我的</p>
      </div>
    </div>
  </div>
</template>

<script>
  import mainWork from '../main/work'
  import mainMsg from '../main/msg'
  import mainContacts from '../main/contacts'
  import mainMy from '../main/my'
export default {
  name:"touchIndex",
  data:function(){
    return {
      swiperOption: {
          notNextTick: true,
          initialSlide:1,
          // pagination: '.swiper-pagination',
          paginationClickable: true,
          autoHeight: true,
          onTransitionStart(swiper){
            $(".footer>div:nth-child("+(swiper.activeIndex+1)+")").addClass("active").siblings(".active").removeClass("active");
          }
        }
    }
  },
  components:{
    mainWork,
    mainMsg,
    mainContacts,
    mainMy
  },
  mounted(){
    $(".swiper-slide>div").css("min-height",document.documentElement.clientHeight+"px");
  },
  methods:{
    pageChange(e,number){
      $(e.currentTarget).addClass("active").siblings(".active").removeClass("active")
      this.$refs.mySwiper.swiper.slideTo(number, 10)
    }
  }
}

</script>

<style lang="less" scoped>
@import "../../public/comment.less";
.touchIndex{
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
}

</style>
