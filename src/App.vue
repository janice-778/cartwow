<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
    <main-tar></main-tar>
  </div>
</template>
<script>
import mainTar from "components/content/tarMain/mainTar"
export  default {
  name:'app',
  components:{
    mainTar
  }
}
</script>
<style>
@import "assets/css/base.css"
</style>
