import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import store from "./store/index.js"
import Toast from "components/toast/index.js"
// 解决移动端300ms延迟
import FastClick from "fastclick"
FastClick.attach(document.body)
// 图片懒加载
import VueLazyLoad from "vue-lazyload"
Vue.use(VueLazyLoad,{
  preLoad:1,
  loading:require("./assets/images/common/placeholder.png")
})
Vue.prototype.$bus = new Vue()
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
