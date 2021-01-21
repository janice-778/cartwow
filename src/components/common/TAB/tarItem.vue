<template>
  <div class="tar-item" @click="btnclick">
      <slot v-if="!isActive" name="icone"></slot>
      <slot v-else name="icone_active"></slot>
      <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
    // 谁用我谁就给我传值
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'bule'
        }
    },
    data(){
        return{
            // isActive:true,
        }
    },
    computed:{
        isActive(){
            console.log(this.$route);
            return this.$route.path.indexOf(this.path) !== -1;//动态找到现在正在变化的路径，找到就是-1.不等就是找到
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}//查看当时的触发状态,有的话，就看触发的颜色值，可以默认，也可以让别人传过来
        }
    },
    methods:{
        btnclick(){
            this.$router.push(this.path);
        }
    }
};
</script>
 
<style scoped>
.tar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
/* .active{
    color: blue;
} */
</style>