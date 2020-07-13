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
                active-text-color="#ffd04b"
                :router="true">
                <el-menu-item index="1" :route="{name:'Index'}">首页</el-menu-item>
                <el-menu-item v-if="this.$store.state.loginUser" index="2" :route="{name:'User'}">我的音乐</el-menu-item>
                <el-menu-item v-else index="2" :route="{name:'User'}" disabled>我的音乐</el-menu-item>
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
                <el-avatar icon="el-icon-user-solid" size="medium"></el-avatar>
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
            <component v-bind:is="currentForm" v-on:changeForm="changeForm" v-on:closeDialog = "loginDialogVisible=false"></component>
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
            title:"登录"
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        changeForm(formName){
            if(formName == "register"){
                this.currentForm = "verificationForm"
                this.title = "注册"
            }
            else if(formName == "forgetPass"){
                this.currentForm = "verificationForm"
                this.title = "忘记密码"
            }
            else if(formName == "login"){
                this.currentForm = "loginForm"
                this.title = "登录"
            }
            else if(formName == "password"){
                this.currentForm = "PasswordForm"
                this.title = "密码"
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
                this.$router.push({name:"User"})
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