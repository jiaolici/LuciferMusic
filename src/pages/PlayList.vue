<template>
    <div>
        <el-image v-if="songlist.cover" :src="songlist.cover" style="width:150px;height:150px;float:left"></el-image>
        <el-image v-else-if="songlist.songs.length!=0" :src="songlist.songs[0].cover" style="width:150px;height:150px;float:left"></el-image>
        <el-image v-else style="width:150px;height:150px;float:left"></el-image>
        <div style="padding-left:200px;text-align:left">
            <h3>{{songlist.name}}</h3>
            <el-row style="height:30px">
                <el-col>
                    <el-avatar shape="square" size="small" :src="songlist.creator.avatar"></el-avatar>
                    <!-- <el-link :underline="false" style="vertical-align:top;line-height:30px;margin-left:10px">我自己</el-link> -->
                    <router-link :to="{name:'Artist',params:{id:songlist.creator.id}}" v-slot="{ href }">
                        <el-link :href="href" :underline="false" style="vertical-align:top;line-height:30px;margin-left:10px">{{ songlist.creator.username }}</el-link>
                    </router-link>
                </el-col>
            </el-row>
            <el-row style="height:30px;margin-top:8px">
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        收藏量：1332次
                    </div>
                </el-col>
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        播放量：152240次
                    </div>
                </el-col>
            </el-row>
            <el-row style="padding-top:10px">
                <el-button icon="el-icon-video-play" size="small" @click="play">播放</el-button>
                <el-button icon="el-icon-folder-add" size="small">收藏</el-button>
                <el-button icon="el-icon-s-comment" size="small">评论（205154）</el-button>
            </el-row>
            <el-row  style="height:30px;;margin-top:10px">
                <el-col :span="2">
                    <div style="font-size:14px;line-height:30px">
                        标签：
                    </div>
                </el-col>
                <el-col :span="22" style="line-height:30px">
                    <el-tag v-for="style in songlist.styles" :key="style" size="mini" style="margin-right:10px">{{ style }}</el-tag>
                </el-col>
            </el-row>
            <el-row  style="height:30px;margin-top:10px;line-height:30px;font-size:14px;">
                <el-col :span="2">
                    <div>
                        介绍：
                    </div>
                </el-col>
                <el-col :span="22">
                    <div>
                        一个歌单
                    </div>
                </el-col>
            </el-row>
        </div>
        <SongList showtype="playlist" :songList="songlist.songs">
        </SongList>
        <Comment>
        </Comment>
    </div>
</template>

<script>
import SongList from '../components/SongList2.vue'
import Comment from '@/components/Comment.vue'
export default {
    data(){
        return {
            songlist:null
        }
    },
    methods:{
        play(index){
            this.$store.commit('playSong',{'index':0,'songList':this.songlist.songs})
            this.$EventBus.$emit("cutSong");
        },
    },
    components:{
        SongList,
        Comment
    },
    created(){
        this.ajax.get("songlist/"+this.$route.params.id+"/",null,null,(data)=>{
            this.songlist = data
        },(errorData)=>{

        })
    }
}
</script>

<style scoped>
.album_cover{
    width:200px;
    height:150px;
    background-size: 170px 150px;
    background-repeat: no-repeat;
    float:left
}
</style>