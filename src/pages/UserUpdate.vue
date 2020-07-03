<template>
    <div>
        <el-form ref="form" :model="userInfo" style="padding:20px 60px">
            <el-form-item>
                <el-input v-model="userInfo.name" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="userInfo.gender">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
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
                city:""
            }
        }
    }
}
</script>

<style>

</style>