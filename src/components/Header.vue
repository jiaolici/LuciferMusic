<template>
    <el-row>
        <el-col :span="4"><h1>Lucifer Music</h1></el-col>
        <el-col :span="10" :offset="1">
            <el-menu
                default-active="1"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#303133"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">我的音乐</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="6">
            <el-input placeholder="请输入内容" size="mini" v-model="inputText">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </el-col>
        <el-col :span="2">
            <router-link v-if="isLogin" to="user" tag="a"><el-avatar size="medium" > user </el-avatar></router-link>
            <el-link v-else :underline="false" @click="dialogVisible = true">登录</el-link>
        </el-col>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="400px"
            :before-close="handleClose"
            custom-class = "loginDialog">
            <el-form ref="form" :model="loginForm" size="small" style="padding:20px 60px">
                <el-form-item>
                    <el-input v-model="loginForm.email" placeholder="邮箱"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="loginForm.password" placeholder="密码" show-password></el-input>
                </el-form-item>
                <div style="line-height:20px">
                    <el-link :underline="false" style="float:left">忘记密码</el-link>
                    <el-link :underline="false" style="float:right">注册</el-link>
                </div>
            </el-form>
            <template slot="title">
                <div>
                <h4 style="margin:0;line-height:40px">登录</h4>
                </div>
            </template>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false" size="small">登录</el-button>
            </span>
        </el-dialog>
    </el-row>
</template>

<script>
  export default {
    data() {
      return {
          inputText:"",
          dialogVisible: false,
          isLogin:false,
          loginForm:{
              email:""
          }
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.el-row{
    width: 1000px;
    margin: 0 auto;
}
.el-col{
    height: 60px;
}
h1{
    margin: 0;
}
.el-avatar{
    margin-top: 12px;
}

</style>
<style>
.loginDialog>.el-dialog__header{
    background-color: #303133;
    padding: 0;
}
.loginDialog>.el-dialog__footer{
    text-align: center;
    padding: 0 60px;
}
.loginDialog>.el-dialog__body{
    padding: 0;
}
.loginDialog>.el-dialog__header>.el-dialog__headerbtn{
    top: 12px;
}
</style>>