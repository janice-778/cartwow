<template>
  <div class="goodsitem" @click="itemClick">
  <img :src="goodsitem.show.img" @load="imageLoad" />
  <div class="goodsinfo">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
  </div>
  </div>
</template>

<script>

export default {
 props:{
    goodsitem:{
         type:Object,
     default(){
         return {}
     }
    }
 },
 methods:{
     imageLoad(){
         this.$bus.$emit("imageLoad")//子组件向父组件发送变化，传值
     },
     itemClick(){
         console.log('点击到详情页');
         this.$router.push('/detail/' + this.goodsitem.iid);
     }
 }
}
</script>

<style scoped>
.goodsitem{
    padding-bottom: 40px;
    position: relative;
    width:48%;
}
.goodsitem img{
   width:100% ;
   border-radius: 5px;
}
.goodsinfo{
   font-size: 12px; 
   position:absolute;
    left:0;
    right:0;
    bottom: 5px;
    text-align: center;
    overflow: hidden;
}
.goodsinfo p{
   overflow: hidden; 
   /*  如果字体太多。就显示。。。*/
   text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
}
.goodsinfo .price{
    color:hotpink;
    margin-bottom: 20px;

}
.goodsinfo .collect{
    position: relative;
}
.goodsinfo .collect ::before{
    content:'';
    position: absolute;
    left:-15px;
    top:-1px;
    width:15px;
    height: 15px;
    /* background:url{"~assets/img/sc.png"} 0 0/14px 14px; */
}
</style>