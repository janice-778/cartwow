<template>
  <div class="tar-control">
    <div v-for="(item,index) in titles" :key="index" cass="tar-item" :class="{active:index===indexcurtent}" @click="itemClick(index)">
        {{item}}
    </div>
  </div>
</template>

<script>

export default {
 props:{
     titles:{
         type:Array,
         defalut(){
             return []
         }
     }
 },
 data(){
     return{
         indexcurtent:0,//记录当前选中的状态
     }
 },
 methods:{
     itemClick(index){
         this.indexcurtent=index;//如果点击的index我们就给当前的index加样式，锁定
         this.$emit("tabclick",index)//子组件向父组件发送点击请求，告诉父组件谁发生了变化，拿去数据。
     }
 }
}
</script>

<style scoped>
.tar-control{
    display: flex;
    text-align: center;
    font-size: 16px;
    justify-content: space-around;
}
.tar-item{
flex:1;
line-height: 40px;
height: 40px;
padding: 5px;
}
.active{
    color:hotpink;
    border-bottom: 3px solid hotpink;
}
</style>