<template>
  <tarF>
    <tarItem path="/app/shouy" activeColor="red">
      <img slot="icone" src="~assets/img/sy.png" />
      <img slot="icone_active" src="~assets/img/syi.png" />
      <div slot="text">首页</div>
    </tarItem>
    <tarItem path="/app/cart" activeColor="red">
      <img slot="icone" src="~assets/img/gw.png" />
      <img slot="icone_active" src="~assets/img/gwi.png" />
      <div slot="text">购物车</div>
    </tarItem>
    <tarItem path="/app/scang" activeColor="red">
      <img slot="icone" src="~assets/img/sc.png" />
      <img slot="icone_active" src="~assets/img/sci.png" />
      <div slot="text">收藏夹</div>
    </tarItem>
    <tarItem path="/app/my" activeColor="red">
      <img slot="icone" src="~assets/img/wd.png" />
      <img slot="icone_active" src="~assets/img/wdi.png" />
      <div slot="text">我的</div>
    </tarItem>
  </tarF>
  
</template>

<script>
import tarF from "components/common/TAB/tarF";
import tarItem from "components/common/TAB/tarItem";
export default {
  name:'mainTar',
 components: {
    tarF,
    tarItem,
  },
}
</script>

<style>

</style>