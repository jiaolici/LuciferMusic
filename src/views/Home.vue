<template>
  <el-container>
    <el-header>
      <Header>
      </Header>
    </el-header>
    <el-main>
      main
    </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style scoped>
  .el-header{
    background-color: #303133;
    color: #fff;
    line-height: 60px;
  }
</style>
