<template>
  <div id="shouye">
    <navBar class="nav-home"><div slot="center">购物街</div></navBar>
    <!--滑轮滚动区  -->
    <scroll class="content" ref="scroll" :probe-type="3"  @scroll="scrollClick" :pull-up-load="true" @pullingUp="loadMore">
      <!-- 轮播图暂时还没有 -->
      <div class="banner">
        <img src="~assets/img/luobo.jpg" />
      </div>
      <recommervier :recommder="erwer"></recommervier>
      <filter1 />
      <tarcontrol
        class="tarControl"
        :titles="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabTop"
      />
      <goodslist :goods="showGoods" />
    </scroll> 
      <viewtop @click.native="backtop" v-show="gobacktop" />

  </div>
</template>

<script>
import navBar from "components/content/navBar/navBar";
import goodslist from "components/content/goodslist/goodslist";
import tarcontrol from "components/content/barcontrol/tarcontrol";
import viewtop from "components/content/viewTop/viewTop";
import homeswiper from "./childcops/homeswiper";
import recommervier from "./childcops/recommervier";
import filter1 from "./childcops/filter";
import { getnetmutidata, gethomegoods } from "network/home";
import scroll from "components/common/scroll/scroll";

export default {
  components: {
    navBar,
    homeswiper,
    recommervier,
    filter1,
    tarcontrol,
    goodslist,
    scroll,
    viewtop,
  },
  created() {
    //页面刚开始展示就要拿到所有的数据
    this.gethometou();
    //请求首页商品列表
    this.gethomelist("pop");
    this.gethomelist("new");
    this.gethomelist("sell");
    
  },
  mounted(){
    //用来监听item中图片的加载情况，
    this.$bus.$on("imageLoad",()=>{//事件监听，
      this.$refs.scroll.refresh();   // 调用其他的组件方法
      });
      //图片加载后处理滑动到一定位置，准备要去赋值，
      //所有的组件都有一个属性，$el,用于获取组件中的元素，
    this.tabOffsetTop=this.$refs.tabTop.$el.offsetTop;
  },
  data() {
    return {
      result: [],
      erwer: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      intercrrt: "pop",
      gobacktop:false,
      tabTop:0,
      saveY:0
    };
  },
  computed: {
    //计算属性、
    showGoods() {
      return this.goods[this.intercrrt].list;
    },
  },
  activated(){
    console.log('是否进入');
    this.$refs.scroll.scrollTo(0,this.saveY);
  },
  deactivated(){
    console.log('是否离开');
    this.saveY=this.$refs.scroll.scroll.y;
  },
  methods: {
    //监听子组件传过来的信息
    loadMore(){
      //证明用户正在看那个index下面的信息，准备加载更多，
      this.gethomelist(this.intercrrt)
    },
    //监听滚轮的滑动距离
    scrollClick(position){
      this.gobacktop=position>1000;//大于1000就为true，图标出现
    },
    //点击返回顶部
    backtop(){
      this.$refs.scroll.scrollTo(0,0);//这样就去找到scroll中拿去我们想要的点击事件，
    },
    //点击传送数据头事件监听
    tabclick(index) {
      switch (index) {
        case 0:
          this.intercrrt = "pop";
          break;
        case 1:
          this.intercrrt = "new";
          break;
        case 2:
          this.intercrrt = "sell";
      }
    },
    gethometou() {
      getnetmutidata().then((res) => {
        // console.log(res);
        this.result = res.data.data.banner.list;
        this.erwer = res.data.data.recommend.list;
      });
    },
    gethomelist(type) {
      const page = this.goods[type].page + 1; // 声明一个变量，可以动态改变获取到的页数，方便以后去维护，
      gethomegoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.data.list); //把后台返回的的值一次对应到我们准备好的数据格中，
        this.goods[type].page += 1; //数据更新页码也要去更新，
        this.$refs.scroll.finishPullUp();//完成加载更多，
      });
    },
  },
};
</script>

<style scoped>
/* 使用ref,如果在组件中使用，则拿到的是组建的this.$res的组件对象
如果在元素对象中使用，则就找到这个元素的对象
 */
#shouye {
  /* 视口高度 */
  height: 100vh;
}
#shouye .banner {
  padding-top: 44px;
}
#shouye img {
  width: 100%;
}
.nav-home {
  background-color: pink;
  color: #fff;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9;
}
.tarControl {
  position: sticky;
  top: 44px;
  background-color: #ffff;
  z-index: 99;
}
.content {
  /* css3中的计算属性 */
  height: calc(100%-93px);
  /* margin-top: 50px; */
  overflow: hidden;
}
</style>