<template>
  <div class="recommend">
        <h1 class="header-index-type">歌单推荐</h1>
        <el-divider></el-divider>
        <el-row>
            <el-button type="text">民谣</el-button>
            <el-button type="text">新金属</el-button>
            <el-button type="text">朋克</el-button>
        </el-row>
        <el-row>
            <el-col v-for="songList in songlists" :key="songList.id" :span="4">
                <el-image :src="songList.cover" style="width: 100px; height: 100px">
                </el-image>
                <p style="width: 100px;margin:0 auto">
                    <router-link :to="{name:'PlayList',params:{id:songList.id}}" v-slot="{ href }">
                        <el-link :href="href" :underline="false">{{ songList.name }}</el-link>
                    </router-link>
                </p>
            </el-col>
        </el-row>
  </div>
</template>

<script>
export default {
    data() {
        return {
            songlists:[]
        };
    },
    created(){
        this.ajax.get("index/songlist",null,null,(data)=>{
            this.songlists = data
        },(errorData)=>{

        })
    }
}
</script>

<style scoped>

</style>