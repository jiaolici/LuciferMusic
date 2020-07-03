<template>
<div>
    <el-form ref="form" :model="passwordForm" size="small" style="padding:20px 60px">
        <el-form-item>
            <el-input v-model="passwordForm.password" placeholder="输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="passwordForm.confirmPassword" placeholder="确认密码" show-password></el-input>
        </el-form-item>
        <el-button type="primary" size="small">确认</el-button>
    </el-form>
    <div style="height:32px;background-color:#303133;line-height:30px;font-size:14px">
        <el-link :underline="false" @click="$emit('changeForm','login')">返回登录</el-link>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            passwordForm:{
                password:"",
                confirmPassword:""
            }
        };
    },
}
</script>

<style>

</style>