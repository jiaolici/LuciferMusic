<template>
    <div style="text-align:left;width:460px;margin:100px auto 180px">
        <h2 style="text-align:center">个人信息</h2>
        <el-upload
            action=""
            :show-file-list="false"
            style="border-radius:50%;text-align:center;margin-bottom:20px">
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            <el-avatar :size="100"> user </el-avatar>
        </el-upload>
        <el-form ref="form" :model="userInfo" label-width="80px" size="small">
            <el-form-item label="用户名">
                <el-input v-model="userInfo.name" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="签名">
                <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="我还没想好要写什么..."
                    v-model="userInfo.introduction"
                    maxlength="300"
                    show-word-limit>
                </el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="userInfo.gender">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="生日">
                <el-date-picker
                    v-model="userInfo.birthday"
                    type="date"
                    placeholder="选择日期"
                    style="width:100%">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="地区">
                <el-cascader
                    v-model="userInfo.area"
                    :options="this.$store.state.globalSetting.areas"
                    style="width:100%">
                </el-cascader>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">保存</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userInfo:{
                name:"",
                gender:"",
                birthday:"",
                introduction:"",
                area:""
            }
        }
    }
}
</script>

<style>

</style>