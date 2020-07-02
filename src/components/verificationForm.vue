<template>
    <el-form ref="form" :model="verificationForm" size="small" style="padding:20px 60px">
        <el-form-item>
            <el-input v-model="verificationForm.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item>
            <el-row :gutter="20">
                <el-col :span="18"><el-input v-model="verificationForm.verificationCode" placeholder="验证码"></el-input></el-col>
                <el-col :span="6"><el-button type="primary" size="small">获取</el-button></el-col>
            </el-row>
        </el-form-item>
        <el-button type="primary" size="small">下一步</el-button>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            verificationForm:{
                email:"",
                verificationCode:""
            }
        };
    },
}
</script>

<style>

</style>