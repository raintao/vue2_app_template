<template>
    <mt-swipe :auto="5000" :showIndicators='true' class="mySlider">
      <mt-swipe-item class="swipe-item">
        <img :src="url.slider0" alt="">
      </mt-swipe-item>
      <mt-swipe-item class="swipe-item">
        <img :src="url.slider1" alt="">
      </mt-swipe-item>
      <mt-swipe-item class="swipe-item">
        <img :src="url.slider2" alt="">
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
  /* <warp-slider :sliderUrl="{sliderUrlObj:obj}"></warp-slider>
    obj包含四个imgurl的对象{
      slider0:"./static/img/slider1.png",
      slider1:"./static/img/slider2.jpg",
      slider2:"./static/img/slider3.jpg"
    }
  */
export default {
  name:"Slider",
  props:['sliderUrl'],
  data:function(){
    return {
      url:this.sliderUrl.sliderUrlObj
    }
  },
  methods:{
    log:function(){
      console.log(this.url.slider0);
    }
  }
}

</script>

<style lang="less" scoped>
@import "../../public/comment.less";
.mySlider{
  height: 8rem;
  text-align: center;
  background-color:@graya;
  .swipe-item{
    >img{width: 100%;height: 100%;}
  }
}


</style>
