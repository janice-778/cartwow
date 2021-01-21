<template>
  <div class="top" >
      <img src="~assets/img/top.png"/>
  </div>
</template>

<script>
export default {
    name:'viewtop',
    data(){
        return{}
    },
    
}
</script>

<style scoped>
.top{
    height: 30px;
    position:fixed;
    bottom:60px;
    right:10px;
}
.top img{
    width:30px;
    height:30px;
}
</style>