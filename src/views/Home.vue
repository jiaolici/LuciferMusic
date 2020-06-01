<template>
  <el-container>
    <el-header>
      <Header>
      </Header>
    </el-header>
    <el-main>
      <Recommend>
      </Recommend>
      <Album>
      </Album>
      <TopList>
      </TopList>
    </el-main>
    <el-footer>Footer</el-footer>
    <Player>
    </Player>
  </el-container>
  
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Recommend from '@/components/Recommend.vue'
import Album from '@/components/Album.vue'
import TopList from '@/components/TopList.vue'
import Player from '@/components/Player.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Recommend,
    Album,
    TopList,
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
</style>
