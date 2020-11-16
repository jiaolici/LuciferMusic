<template>
    <div>
        <el-image :src="song.album.cover" style="width:150px;height:150px;float:left"></el-image>
        <div style="padding-left:200px;text-align:left">
            <h3>{{song.name}}</h3>
            <el-row style="height:30px">
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        歌手：
                        <!-- <el-link :underline="false" style="vertical-align:baseline;">Joy Division</el-link> -->
                        <router-link v-for="(artist,i) in song.artists" :key="artist.id" :to="{name:'Artist',params:{id:artist.id}}" v-slot="{ href }">
                            <span>
                                <el-link :href="href" :underline="false" style="vertical-align:baseline;">{{ artist.name }}</el-link>
                                <span v-if="i!=song.artists.length-1" style="color:#a6a9ad"> / </span>
                            </span>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        流派：{{ styles }}
                    </div>
                </el-col>
            </el-row>
            <el-row style="height:30px">
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        专辑：
                        <!-- <el-link :underline="false" style="vertical-align:baseline;">Unknown Pleasures</el-link> -->
                        <router-link :to="{name:'Album',params:{id:song.album.id}}" v-slot="{ href }">
                            <el-link :href="href" :underline="false" style="vertical-align:baseline;">{{ song.album.name }}</el-link>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        发行时间：{{ song.album.publish_date }}
                    </div>
                </el-col>
            </el-row>
            <el-row style="padding-top:10px">
                <el-button icon="el-icon-video-play" @click="play" size="small">播放</el-button>
                <el-button icon="el-icon-folder-add" size="small" @click="fav">收藏</el-button>
                <el-button icon="el-icon-s-comment" size="small">评论（{{commentCount}}）</el-button>
                
            </el-row>
            <div style="line-height:25px;font-size:14px;margin-top:10px">
                <p v-html="song.lyric.replace(/\r\n/g, '<br/>')">
                </p>
            </div>
        </div>
        <Comment type="song" :target_id="song.id" v-on:update-comment-count="commentCount=$event">
        </Comment>
        <FavSongDialog :visible="favSongDialogvisible" @favsongdialog-close="favSongDialogvisible=false" :songId="song.id">
        </FavSongDialog>
    </div>
</template>

<script>
import Comment from '@/components/Comment.vue'
import FavSongDialog from '@/components/FavSongDialog.vue'
export default {
    data:function(){
        return {
            song:null,
            commentCount:0,
            favSongDialogvisible:false
        }
    },
    computed:{
        styles:function(){
            if(this.song.album.styles){
                var styles = ""
                for (let style of this.song.album.styles){
                    styles += (style+"、")
                }
                return styles.substring(0, styles.length-1)
            }
            else{
                return ""
            }
        }
    },
    methods:{
        play(index){
            this.$store.commit('playSong',{'index':0,'songList':[this.song]})
            this.$EventBus.$emit("cutSong");
        },
        fav(){
            if(!this.$store.state.loginUser){
                this.$message({type: 'warning',message: '请先登录!',showClose: true,center:true,duration:1000})
                return
            }
            else{
                this.favSongDialogvisible=true
            }
        }
    },
    components:{Comment,FavSongDialog},
    created(){
        this.ajax.get("song/"+this.$route.params.id+"/",null,null,(data)=>{
            this.song = data
        },(errorData)=>{

        })
    }
}
</script>

<style scoped>
</style>