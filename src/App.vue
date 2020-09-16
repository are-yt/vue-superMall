<template>
  <div id="app">
      <keep-alive exclude="Detail">
        <router-view></router-view>
      </keep-alive>
      <tabbar v-show="isShowTabbar"></tabbar>
  </div>
</template>

<script>
import Tabbar from "./common/Tabbar.vue"
export default {
  name: 'App',
  components:{
    Tabbar
  },
  data(){
    return {
      isShowTabbar:true
    }
  },
  watch:{
    $route(){
      const path = this.$route.path
      switch(path) {
        case "/home":
          this.isShowTabbar = true
          break;
        case "/category":
          this.isShowTabbar = true
          break;
        case "/car":
          this.isShowTabbar = true
          break;
        case "/profile":
          this.isShowTabbar = true
          break;
        default:this.isShowTabbar = false
      }
    }
  }
}
</script>

<style>
  @import "~assets/css/base.css";
</style>
