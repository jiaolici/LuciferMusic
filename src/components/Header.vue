<template>
    <el-row>
        <el-col :span="4"><h1 class="header-logo">Lucifer Music</h1></el-col>
        <el-col :span="10" :offset="1">
            <el-menu
                :default-active="$route.name"
                class="el-menu-demo"
                mode="horizontal"
                background-color="#303133"
                text-color="#fff"
                active-text-color="#ffd04b"
                :router="true">
                <el-menu-item index="Index" :route="{name:'Index'}">首页</el-menu-item>
                <el-menu-item v-if="this.$store.state.loginUser" index="2" :route="{name:'User',params:{id:$store.state.loginUser.id}}">我的音乐</el-menu-item>
                <el-menu-item v-else index="User" :route="{name:'User'}" disabled>我的音乐</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="6">
            <el-input placeholder="请输入内容" size="mini" v-model="inputText" @keyup.enter.native="searchHandle">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </el-col>
        <el-col :span="2">
            <!-- <router-link v-if="this.$store.state.loginUser" to="user" tag="a"><el-avatar size="medium" > user </el-avatar></router-link> -->
            <el-dropdown @command="handleCommand" v-if="this.$store.state.loginUser" trigger="hover" style="line-height:10px">
                <el-avatar icon="el-icon-user-solid" :src="this.$store.state.loginUser.avatar" size="medium"></el-avatar>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="userInfo" icon="el-icon-user">个人主页</el-dropdown-item>
                    <el-dropdown-item command="userSetting" icon="el-icon-setting">个人设置</el-dropdown-item>
                    <el-dropdown-item command="logout" icon="el-icon-circle-close">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-link v-else :underline="false" @click="loginDialogVisible = true">登录</el-link>
        </el-col>
        <el-dialog
            :visible.sync="loginDialogVisible"
            width="400px"
            custom-class = "loginDialog"
            @closed = "changeForm('login')">
            <component v-bind:is="currentForm" v-on:changeForm="changeForm" v-on:closeDialog = "loginDialogVisible=false" :type="dialogType"></component>
            <template slot="title">
                <div>
                <h4 style="margin:0;line-height:40px">{{title}}</h4>
                </div>
            </template>
        </el-dialog>
    </el-row>
</template>

<script>
import loginForm from './loginForm.vue'
import verificationForm from './verificationForm.vue'
import PasswordForm from './PasswordForm'
export default {
    data() {
        return {
            inputText:"",
            loginDialogVisible: false,
            isLogin:false,
            currentForm:"loginForm",
            title:"登录",
            dialogType:"login"
        };
    },
    methods: {
        changeForm(formName){
            if(formName == "regVerify"){
                this.currentForm = "verificationForm"
                this.dialogType = "regVerify"
                this.title = "注册"
            }
            else if(formName == "forgetPassVerify"){
                this.currentForm = "verificationForm"
                this.dialogType = "forgetPassVerify"
                this.title = "忘记密码"
            }
            else if(formName == "login"){
                this.currentForm = "loginForm"
                this.dialogType = "login"
                this.title = "登录"
            }
            else if(formName == "regPassword"){
                this.currentForm = "PasswordForm"
                this.dialogType = "regPassword"
                this.title = "注册密码"
            }
            else if(formName == "resetPassword"){
                this.currentForm = "PasswordForm"
                this.dialogType = "resetPassword"
                this.title = "重置密码"
            }
        },
        searchHandle(){
            if(this.inputText==""){
                this.$message({showClose:true,center: true,duration:1000,message:'请输入内容'});
            }
            else{
                this.$router.push({name:"Search"})
            }
        },
        handleCommand(command){
            if(command == "userInfo"){
                this.$router.push({name:"User",params:{id:this.$store.state.loginUser.id}})
            }
            else if(command == "userSetting"){
                this.$router.push({name:"UserUpdate"})
            }
            else if(command == "logout"){
                window.localStorage.removeItem("token")
                this.$store.commit('logout')
                this.$router.push({name:"Index"})
            }
        }
    },
    components:{
        loginForm,
        verificationForm,
        PasswordForm
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
.header-logo{
    line-height: 60px;
}
</style>
<style>
.loginDialog>.el-dialog__header{
    background-color: #303133;
    padding: 0;
}
.loginDialog>.el-dialog__body{
    padding: 0;
}
.loginDialog>.el-dialog__header>.el-dialog__headerbtn{
    top: 12px;
}
</style>>