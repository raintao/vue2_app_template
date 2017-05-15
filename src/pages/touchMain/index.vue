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
      <div class="footerNav" data-tar="0">
        <p><i class="material-icons">message</i></p>
        <p>消息</p>
      </div>
      <div class="footerNav active" data-tar="1">
        <p><i class="material-icons">work</i></p>
        <p>工作</p>
      </div>
      <div class="footerNav" data-tar="2">
        <p><i class="material-icons">people_outline</i></p>
        <p>联系人</p>
      </div>
      <div class="footerNav" data-tar="3">
        <p><i class="material-icons">person_outline</i></p>
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
    var _this=this;
    $(".footerNav").click(function(){
      $(this).addClass("active").siblings(".active").removeClass("active");
      var tar=$(this).attr("data-tar");
      _this.$refs.mySwiper.swiper.slideTo(tar, 10)
    });
  },
  methods:{
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
}

</style>
