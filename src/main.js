import Vue from 'vue'
import App from './App.vue'

//导入element组件库
import ElementUI from "element-ui";

//导入组件相关样式
import "element-ui/lib/theme-chalk/index.css";

import router from './router'

import axios from './http'
Vue.prototype.ajax = axios // 让它在每个组件都可用(重命名axios为ajax)
//配置Vue插件
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
