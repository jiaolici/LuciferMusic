<template>
    <div>
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
    </div>
</template>

<script>
  export default {
    data() {
      return {

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
div{
    width: 1000px;
    margin: 0 auto;
}
</style>