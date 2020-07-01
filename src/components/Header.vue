<template>
    <el-row>
        <el-col :span="4"><h1>Lucifer Music</h1></el-col>
        <el-col :span="8" :offset="1">
            <el-menu
                default-active="1"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#303133"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">我的音乐</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="4">
            <el-input placeholder="请输入内容" size="mini" v-model="inputText">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </el-col>
        <el-col :span="4">
            <el-avatar size="medium" @click="dialogVisible = true"> user </el-avatar>
        </el-col>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </el-row>
</template>

<script>
  export default {
    data() {
      return {
          inputText:"",
          dialogVisible: true
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
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