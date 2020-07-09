import axios from 'axios';
import {Message} from "element-ui";
// 配置API接口地址
var root = 'http://127.0.0.1:9000/';

// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/

//请求拦截器：添加token
axios.interceptors.request.use((config)=>{
  let token = window.localStorage.getItem("token")
  if(token){
    config.headers['token'] = token
  }
  return config
})

function apiAxios (method, url, params, responseType, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false,
    responseType: responseType ? responseType : "json"
  })
  .then(function (res) {
    if (res.data) {
      if (success) {
        success(res.data)
      }
    } else {
      if (failure) {
        failure(res.data)
      } else {
        window.alert('error: ' + JSON.stringify(res.data))
      }
    }
  })
  .catch(function (err) {
    console.log(err);
    let res = err.response
    if(!res){
      Message({
        message: '服务器连接失败',
        type: 'error',
        showClose: true,
        center:true,
        duration:1000
      })
    }
    else{
      failure(res.data)
    }
    // if (err) {
    //   window.alert('api error, HTTP CODE: ' + res.status)
    // }
  })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, responseType, success, failure) {
    return apiAxios('GET', url, params, responseType, success, failure)
  },
  post: function (url, params, responseType, success, failure) {
    return apiAxios('POST', url, params, responseType, success, failure)
  },
  put: function (url, params, responseType, success, failure) {
    return apiAxios('PUT', url, params, responseType, success, failure)
  },
  delete: function (url, params, responseType, success, failure) {
    return apiAxios('DELETE', url, params, responseType, success, failure)
  }
}
  
