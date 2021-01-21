<template>
  <div class="recommder">
    <div v-for="item in recommder" :key="item.sort" class="recommder-item">
        <a :href="item.link">
            <img :src="item.image"/> 
        </a>
        <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>

export default {
 props:{
     recommder:{
         type:Array,
         defalut(){
             return []
         }
     }
 }
}
</script>

<style scoped>
.recommder{
    display:flex;
    width:100%;
    text-align: center;
    font-size: 12px;
    margin: 10px 0 20px;
    border-bottom:10px  solid #eee;
}
.recommder-item img{
    flex:1;
    width:80px;
    height:80px;
    margin-bottom: 10px;
}
</style>