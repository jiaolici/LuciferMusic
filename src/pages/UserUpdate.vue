<template>
    <div>
        <el-form ref="form" :model="userInfo" label-width="80px" size="small" style="text-align:left;width:460px">
            <el-form-item label="用户名">
                <el-input v-model="userInfo.name" placeholder="用户名"></el-input>
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
                <el-select v-model="userInfo.area" placeholder="请选择">
                    <el-option
                    v-for="item in this.$store.state.globalSetting.areas"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name">
                    </el-option>
                </el-select>
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