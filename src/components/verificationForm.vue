<template>
<div>
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
        <el-button type="primary" size="small" @click="handleNext">下一步</el-button>
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
            verificationForm:{
                email:"",
                verificationCode:""
            }
        };
    },
    methods:{
        handleNext:function(){
            if(this.type=="regVerify"){
                this.$emit('changeForm','regPassword')
            }
            else if(this.type=="forgetPassVerify"){
                this.$emit('changeForm','resetPassword')
            }
        }
    },
    props:{
        type:{
            type:String,
            required:true,
        }
    }
}
</script>

<style>

</style>