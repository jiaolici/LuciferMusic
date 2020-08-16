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
                <el-button icon="el-icon-folder-add" size="small">收藏</el-button>
                <el-button icon="el-icon-s-comment" size="small">评论（205154）</el-button>
            </el-row>
            <div style="line-height:25px;font-size:14px;margin-top:10px">
                <p v-html="album.introduction.replace(/\r\n/g, '<br/>')">
                </p>
            </div>
        </div>
        <SongList showtype="album" :songList="album.songs">
        </SongList>
        <Comment>
        </Comment>
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
            album:null
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
        play(index){
            this.$store.commit('playSong',{'index':0,'songList':this.album.songs})
            this.$EventBus.$emit("cutSong");
        },
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