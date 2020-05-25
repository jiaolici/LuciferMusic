import Vue from 'vue'
import App from './App.vue'

//导入element组件库
import ElementUI from "element-ui";

//导入组件相关样式
import "element-ui/lib/theme-chalk/index.css";

import router from './router'
//配置Vue插件
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
