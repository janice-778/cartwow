


<template>
  <div class="goods">
      <goodsitem v-for="item in goods" :key="item.iid" :goodsitem="item"/>
  </div>
</template>

<script>
import goodsitem from './goodsitem.vue'
export default {
name:'goodslist',
components: { goodsitem },
   props:{
       goods:{
           type:Array,
           default(){
           return []
         }
       }
    }
}
</script>

<style scoped>
.goods{
    display:flex;
    /* 根据一行自己进行适配 */
    flex-flow: wrap;
    /* 均分 */
    justify-content: space-around;
    padding: 2px;
}
</style>
