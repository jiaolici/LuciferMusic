<template>
  <el-container>
    <el-header>
      <Header>
      </Header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <Footer>
      </Footer>
    </el-footer>
    <Player>
    </Player>
  </el-container>
  
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import Recommend from '@/components/Recommend.vue'
// import Album from '@/components/Album.vue'
// import TopList from '@/components/TopList.vue'
import Player from '@/components/Player.vue'
//import Index from '@/pages/Index.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Player
  }
}
</script>

<style scoped>
  .el-header{
    background-color: #303133;
    color: #fff;
    line-height: 60px;
  }
  .el-main{
    width: 1000px;
    margin: 0 auto;
  }
  .el-footer{
    background-color: #999999;
    color: #fff;
  }
</style>
