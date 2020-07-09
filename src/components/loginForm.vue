<template>
    <el-form ref="loginForm" :model="loginForm" :rules="rules" size="small" style="padding:20px 60px">
        <el-form-item prop="email">
            <el-input v-model="loginForm.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="loginForm.password" placeholder="密码" show-password></el-input>
        </el-form-item>
        <div style="line-height:20px;height:30px">
            <el-link :underline="false" style="float:left" @click.prevent="$emit('changeForm','forgetPass')">忘记密码</el-link>
            <el-link :underline="false" style="float:right" @click="$emit('changeForm','register')">注册</el-link>
        </div>
        <el-button type="primary" size="small" @click="login">登录</el-button>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            loginForm:{
                email:"",
                password:""
            },
            rules:{
                email:[
                    {required:true,message:"请输入邮箱",trigger:'blur'}
                ],
                password:[
                    {required:true,message:"请输入密码",trigger:'blur'}
                ]
            }
        };
    },
    methods:{
        login(){
            this.$refs.loginForm.validate(valid=>{
                if(!valid){
                    return false
                }
                else{
                    this.ajax.post('login',{
                        username:this.loginForm.email,
                        password:this.loginForm.password},
                        null,(data)=>{
                            console.log(data)
                        },(data)=>{
                            console.log(data)
                        })
                }
            })
            
        }
    }
}
</script>

<style>

</style>