<template>
  <div class="recommend">
        <h1>歌单推荐</h1>
        <el-row>
            <el-button type="text">民谣</el-button>
            <el-button type="text">新金属</el-button>
            <el-button type="text">朋克</el-button>
        </el-row>
        <el-row>
        <div class="cover">
            <el-image style="width: 100px; height: 100px">
            </el-image>
            <p><el-link :underline="false">无下划线</el-link></p>
        </div>
        </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cover{
    width: 100px;
}
.recommend{
    width: 1000px;
    margin: 0 auto;
}
</style>