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

//使用vuex
import store from './store'

new Vue({
  router,
  render: h => h(App),
  beforeCreate(){
    try {
      window.AudioContext = window.AudioContext||window.webkitAudioContext;
    }
    catch(e){
        alert('MLGB 你的浏览器连个Web-Audio-API 都不支持！！')
    }
  },
  created(){
    let token = window.localStorage.getItem('token')
    let verify = {
      then:function(resolve,reject){
        this.ajax.post('verify/',{'token':token},null,(data)=>{
          //token验证成功
          if(data.token){
            resolve("refreshToken")
          }
        },(data)=>{
          if(data.non_field_errors[0]=="Signature has expired."){
              //token过期，清除
              window.localStorage.removeItem('token')
              resolve("clearToken")
          }
          else if(data.non_field_errors[0]=="Error decoding signature."){
              //token错误
              resolve("errorToken")
          }
      })
      }
    }
    let refresh = {
      then:function(resolve,reject){
          this.ajax.post('refresh/',{'token':token},null,(data)=>{
              //刷新token成功
              window.localStorage.setItem('token', data.token)
              let user = {id:data.id,username:data.username}
              if(!this.$store.state.loginUser){
                  this.$store.commit('login',user)
              }
          },(data)=>{
              //刷新token失败
              if(data.non_field_errors[0]=="Signature has expired."){
                  //token过期，清除
                  window.localStorage.removeItem('token')
                  resolve("clearToken")
              }
              else if(data.non_field_errors[0]=="Error decoding signature."){
                  //token错误
                  resolve("errorToken")
              }
          })
      }
    }
    Promise.resolve(verify).then((value)=>{
        if(value == "refreshToken"){
            return Promise.resolve(refresh)
        }
    }).then((value)=>{
        console.log(value)
    })
  },
  store
}).$mount('#app')
