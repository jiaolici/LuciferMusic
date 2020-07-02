<template>
    <el-form ref="form" :model="loginForm" size="small" style="padding:20px 60px">
        <el-form-item>
            <el-input v-model="loginForm.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="loginForm.password" placeholder="密码" show-password></el-input>
        </el-form-item>
        <div style="line-height:20px;height:30px">
            <el-link :underline="false" style="float:left" @click.prevent="$emit('forgetPass','')">忘记密码</el-link>
            <el-link :underline="false" style="float:right" @click="$emit('register','')">注册</el-link>
        </div>
        <el-button type="primary" size="small">登录</el-button>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            loginForm:{
                email:"",
                password:""
            }
        };
    },
}
</script>

<style>

</style>