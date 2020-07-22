<template>
    <div v-if="this.$store.state.loginUser" style="text-align:left;width:460px;margin:100px auto 180px">
        <h2 style="text-align:center">个人信息</h2>
        <el-upload
            action=""
            :show-file-list="false"
            :auto-upload="false"
            :multiple="false"
            :on-change="selectAvatar"
            :http-request="uploadInfo"
            ref="upload"
            accept="image/jpeg,image/png"
            style="border-radius:50%;text-align:center;margin-bottom:20px">
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            <!-- <el-avatar :src="userInfo.avatar" fit="cover" :size="100"> user </el-avatar> -->
            <el-image style="width: 100px; height: 100px; border-radius:50%" :src="userInfo.avatar" fit="cover"></el-image>
        </el-upload>
        <el-form ref="form" :model="userInfo" label-width="80px" size="small">
            <el-form-item label="用户名">
                <el-input v-model="userInfo.username" placeholder="用户名"></el-input>
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
                    v-model="userInfo.city"
                    :options="this.$store.state.globalSetting.areas"
                    style="width:100%">
                </el-cascader>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="saveHandle">保存</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
    <Error v-else>
    </Error>
</template>

<script>
import Error from '../components/Error.vue'
export default {
    data(){
        return {
            userInfo:{
                id:"",
                username:"",
                introduction:"",
                gender:"",
                birthday:"",
                city:"",
                avatar:""
            }
        }
    },
    components:{
        Error
    },
    methods:{
        saveHandle:function(){
            this.$refs.upload.submit()
        },
        uploadInfo:function(params){
            console.log(params)
            console.log(this.userInfo.avatar)
            var formData = new FormData()
            formData.append("username", this.userInfo.username)
            formData.append("introduction", this.userInfo.introduction)
            formData.append("gender", this.userInfo.gender)
            formData.append("birthday", this.userInfo.birthday)
            formData.append("avatar", params.file)
            this.ajax.put("user/"+this.userInfo.id+"/",formData,null,null,null)
        },
        loadUserData:function(){
            this.userInfo.id = this.$store.state.loginUser.id
            this.userInfo.username = this.$store.state.loginUser.username
            this.userInfo.introduction = this.$store.state.loginUser.introduction
            this.userInfo.gender = this.$store.state.loginUser.gender
            this.userInfo.birthday = this.$store.state.loginUser.birthday
            this.userInfo.city = this.$store.state.loginUser.city
            this.userInfo.avatar = this.$store.state.loginUser.avatar
        },
        selectAvatar:function(file, fileList){
            fileList.splice(0,1,file) //替换掉第一个，可以不用写limit
            this.userInfo.avatar = URL.createObjectURL(file.raw)
        }
    },
    created(){
        if(this.$store.state.loginUser){
            this.loadUserData()
        }
        else{
            this.$EventBus.$on("login",this.loadUserData)
        }
    }
}
</script>

<style>

</style>