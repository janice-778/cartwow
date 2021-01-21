<template>
  <div>
      <img :src="topImage"  class="topImage"/>
  </div>
</template>

<script>
export default {
    name:"detailSiwper",
    props:{
        topImage:{
            type:Array,
            default(){
            return [] 
        }
        }
        
    }
}
</script>

<style scoped>
.topImage{
    width: 100%;
    height: 300px;
}
</style>