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
                    <router-link :to="{name:'User',params:{id:songlist.creator.id}}" v-slot="{ href }">
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
                <!-- <el-button icon="el-icon-folder-add" size="small" @click="fav">收藏</el-button> -->
                <el-button v-if="songlist.is_fav" icon="el-icon-folder-add" @click="fav" size="small" type="primary">已收藏</el-button>
                <el-button v-else icon="el-icon-folder-add" @click="fav" size="small">收藏</el-button>
                <el-button icon="el-icon-s-comment" size="small">评论（{{commentCount}}）</el-button>
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
        <Comment  type="songlist" :target_id="songlist.id" v-on:update-comment-count="commentCount=$event">
        </Comment>
        <el-dialog
            :visible.sync="confirmDialogVisible"
            width="400px"
            custom-class = "loginDialog">
            <div style="padding:20px 60px">
                <p>是否取消收藏？</p>
                <el-button type="primary" size="small" @click="favHandle">是</el-button>
                <el-button size="small" @click="confirmDialogVisible = false">否</el-button>
            </div>
            <template slot="title">
                <div>
                <h4 style="margin:0;line-height:40px;color:#fff">提示</h4>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import SongList from '../components/SongList2.vue'
import Comment from '@/components/Comment.vue'
export default {
    data(){
        return {
            songlist:null,
            commentCount:0,
            confirmDialogVisible:false
        }
    },
    methods:{
        play(index){
            this.$store.commit('playSong',{'index':0,'songList':this.songlist.songs})
            this.$EventBus.$emit("cutSong");
        },
        fav(){
            if(!this.$store.state.loginUser){
                this.$message({type: 'warning',message: '请先登录!',showClose: true,center:true,duration:1000})
                return
            }
            else{
                if(this.songlist.is_fav){
                    this.confirmDialogVisible = true
                }
                else{
                    this.ajax.post("fav/",{
                        user:this.$store.state.loginUser.id,
                        content_type:"songlist",
                        object_id:this.songlist.id
                    },null,(data)=>{
                        //console.log(data)
                        this.songlist.is_fav = true
                        this.songlist.fav_id = data.id
                    },(errorData)=>{
                        console.log(errorData)
                    })
                }
            }
        },
        favHandle(){
            this.ajax.delete("fav/"+this.songlist.fav_id+"/",null,null,(data)=>{
                this.songlist.is_fav = false
                this.confirmDialogVisible = false
                console.log("xxxx")
            },(errorData)=>{
                console.log(errorData)
            })
        },
        loadSongList(){
            this.ajax.get("songlist/"+this.$route.params.id+"/",null,null,(data)=>{
                this.songlist = data
            },(errorData)=>{

            })
        }
    },
    components:{
        SongList,
        Comment
    },
    created(){
        this.loadSongList()
    },
    watch:{
        $route(){
            if (this.$route.params.id) {
                // this.created()
                // console.log(this)
                this.loadSongList()
            }
        }
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