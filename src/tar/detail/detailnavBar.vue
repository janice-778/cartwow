<template>
  <div >
      <nav-bar >
          <div slot="left" class="back" @click="backClick" >
              <img src="~assets/img/back.png"/>
          </div>
          <div slot="center" class="item">
              <div v-for="(item,index) in titles" :key="item" class="itemi" :class='{active:index==currentIndex}' @click="clickTitle(index)">{{item}}</div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import navBar from "components/content/navBar/navBar";

export default {
  components: { navBar },
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
            clickTitle(index){
            this.currentIndex=index;
        },
        backClick(){
            this.$router.back();
        }
    },
    // // created(){
    // //     showDetail(this.iid).then(res=>{
    // //         console.log("res");
    // //         console.log(res);
    // //     })
    // }
}
</script>

<style scoped>

.item{
    display:flex;
}
.itemi{
   flex: 1; 
}
.active{
    color:red;
}
.back img{
    width: 25px;
    height: 25px;
    margin-top: 10px;
}
</style>