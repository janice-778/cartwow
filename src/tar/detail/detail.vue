<template>
  <div id="detail">
    <detailnav-bar></detailnav-bar>
    <detail-siwper :top-image="topImage"></detail-siwper>
    <detail-goods-info :goods="goods" />
  </div>
</template>

<script>
// import navBar from "components/content/navBar/navBar";
import detailnavBar from "./detailnavBar";
import { showDetail, goods } from "network/detail"; //如果没有使用export default的方法就要用{}方法引入。
import detailSiwper from "./detailSiwper";
import detailGoodsInfo from "./Detailgoodsinfo";
import scroll from "components/common/scroll/scroll";
export default {
  components: { detailnavBar, detailSiwper, detailGoodsInfo, scroll },
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
    };
  },
  created() {
    this.iid = this.$route.params.iid; //把传过来的iid保存起来给这个页面使用，
    showDetail(this.iid).then((res) => {
      console.log("resdddddd");
      console.log(res);
      const data = res.data.result;
      // 先获取顶部的照片
      this.topImage = data.itemInfo.topImages;
      //获取页面详情数据,拿到每个 分类下的数据
      this.goods = new goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
    });
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
</style>
