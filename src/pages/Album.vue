<template>
    <div>
        <div class="album_cover" :style="{backgroundImage:album_cover}">
            <el-image :src="album.cover" style="width:150px;height:150px;float:left"></el-image>
        </div>
        <div style="padding-left:200px;text-align:left">
            <h3>{{album.name}}</h3>
            <el-row style="height:30px">
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        歌手：
                        <!-- <router-link to="artist" tag="span"><el-link :underline="false" style="vertical-align:baseline;">Joy Division</el-link></router-link> -->
                        <router-link :to="{name:'Artist',params:{id:album.artist.id}}" v-slot="{ href }">
                            <el-link :href="href" :underline="false" style="vertical-align:baseline;">{{ album.artist.name }}</el-link>
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
                        发行公司：{{ album.company }}
                    </div>
                </el-col>
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        发行时间：{{ album.publish_date }}
                    </div>
                </el-col>
            </el-row>
            <el-row style="padding-top:10px">
                <el-button icon="el-icon-video-play" @click="play" size="small">播放</el-button>
                <el-button v-if="album.is_fav" icon="el-icon-folder-add" @click="fav" size="small" type="primary">已收藏</el-button>
                <el-button v-else icon="el-icon-folder-add" @click="fav" size="small">收藏</el-button>
                <el-button icon="el-icon-s-comment" size="small">评论（205154）</el-button>
            </el-row>
            <div style="line-height:25px;font-size:14px;margin-top:10px">
                <p v-html="album.introduction.replace(/\r\n/g, '<br/>')">
                </p>
            </div>
        </div>
        <SongList showtype="album" :songList="album.songs">
        </SongList>
        <Comment type="album" :target_id="album.id">
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
import album_coverImag from '../images/album_cover.png'
import SongList from '../components/SongList2.vue'
import Comment from '@/components/Comment.vue'
export default {
    data(){
        return {
            album_cover:"url(" + album_coverImag + ")",
            album:null,
            confirmDialogVisible:false
        }
    },
    computed:{
        styles:function(){
            if(this.album.styles){
                var styles = ""
                for (let style of this.album.styles){
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
        play(){
            this.$store.commit('playSong',{'index':0,'songList':this.album.songs})
            this.$EventBus.$emit("cutSong");
        },
        fav(){
            if(!this.$store.state.loginUser){
                this.$message({type: 'warning',message: '请先登录!',showClose: true,center:true,duration:1000})
                return
            }
            else{
                if(this.album.is_fav){
                    this.confirmDialogVisible = true
                }
                else{
                    this.ajax.post("fav/",{
                        user:this.$store.state.loginUser.id,
                        content_type:"album",
                        object_id:this.album.id
                    },null,(data)=>{
                        //console.log(data)
                        this.album.is_fav = true
                        this.album.fav_id = data.id
                    },(errorData)=>{
                        console.log(errorData)
                    })
                }
            }
        },
        favHandle(){
            this.ajax.delete("fav/"+this.album.fav_id+"/",null,null,(data)=>{
                this.album.is_fav = false
                this.confirmDialogVisible = false
                console.log("xxxx")
            },(errorData)=>{
                console.log(errorData)
            })
        }
    },
    components:{
        SongList,
        Comment
    },
    created(){
        this.ajax.get("album/"+this.$route.params.id+"/",null,null,(data)=>{
            this.album = data
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