<template>
    <div>
        <h1 class="header-index-type">新专上架</h1>
        <el-divider></el-divider>
        <el-row>
            <el-col v-for="album in albums" :key="album.id" :span="6">
                <el-image :src="album.cover" style="width: 150px; height: 150px">
                </el-image>
                <div style="width: 150px;margin:0 auto;text-align:left">
                    <router-link :to="{name:'Album',params:{id:album.id}}" v-slot="{ href }">
                        <el-link :href="href" :underline="false">{{ album.name }}</el-link>
                    </router-link>
                    <br>
                    <router-link :to="{name:'Artist',params:{id:album.artist.id}}" v-slot="{ href }">
                        <el-link :href="href" :underline="false">{{ album.artist.name }}</el-link>
                    </router-link>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            albums:[]
        };
    },
    created(){
        this.ajax.get("index/album",null,null,(data)=>{
            this.albums = data
        },(errorData)=>{

        })
    }
}
</script>

<style>

</style>