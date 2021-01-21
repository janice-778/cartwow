<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType, //这儿是监听滚动的距离的一种特性，侦测，0和1 都是 不侦测，3就是开始侦测
      //2是手指滚动的过程中检测，手指离开的时候不检测，
      //3是只要手指动了就会检测，
      click: true,
      pullUpLoad:true,
    });
    //监听过滚动的位置
    window.addEventListener("scroll", (e) => {
      this.$emit("scroll", e.path[1].scrollY);
    });
    //监听滚轮是否到达底部
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        console.log("滑动到底部");
        this.scroll.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo(x, y, time) {
      // console.log(x,y);
      // this.scroll.scrollTo(x,y,time);
      window.scrollTo(x, y);
    },
    refresh(){
        this.scroll && this.scroll.refresh();//调用scroll的刷新功能
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp();
    }
  },
};
</script>

<style>
</style>