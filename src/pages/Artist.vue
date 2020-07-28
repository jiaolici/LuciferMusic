<template>
    <div>
        <el-image style="width:150px;height:150px;float:left;border-radius:50%;" :src="artist.avatar"></el-image>
        <div style="padding-left:200px;text-align:left;height:150px">
            <h3>{{artist.name}}</h3>
            <el-row style="height:30px">
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        别名：{{artist.alias}}
                    </div>
                </el-col>
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        国籍：{{artist.country}}
                    </div>
                </el-col>
            </el-row>
            <el-row style="height:30px">
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        代表作品：
                        <el-link :underline="false" style="vertical-align:baseline;">Love Will Tear Us Apart</el-link> 
                    </div>
                </el-col>
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        音乐风格：{{styles}}
                    </div>
                </el-col>
            </el-row>
            <el-row style="height:30px">
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        单曲：442
                    </div>
                </el-col>
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        专辑：47
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-tabs v-model="activeItem">
            <el-tab-pane label="热门歌曲" name="songList">
                <SongList showtype="artist">
                </SongList>
            </el-tab-pane>
            <el-tab-pane label="所有专辑" name="allAlbum">
                <el-row>
                    <el-col :span="6">
                        <el-image style="width: 150px; height: 150px">
                        </el-image>
                        <div style="width: 150px;margin:0 auto;text-align:left">
                            <el-link :underline="false">Unknown Pleasures</el-link>
                            <span style="font-size:12px;color:#999">1979-06-14</span>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <el-image style="width: 150px; height: 150px">
                        </el-image>
                        <div style="width: 150px;margin:0 auto;text-align:left">
                            <el-link :underline="false">Unknown Pleasures</el-link>
                            <span style="font-size:12px;color:#999">1979-06-14</span>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <el-image style="width: 150px; height: 150px">
                        </el-image>
                        <div style="width: 150px;margin:0 auto;text-align:left">
                            <el-link :underline="false">Unknown Pleasures</el-link>
                            <span style="font-size:12px;color:#999">1979-06-14</span>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <el-image style="width: 150px; height: 150px">
                        </el-image>
                        <div style="width: 150px;margin:0 auto;text-align:left">
                            <el-link :underline="false">Unknown Pleasures</el-link>
                            <span style="font-size:12px;color:#999">1979-06-14</span>
                        </div>
                    </el-col>
                    <el-col :span="6" style="margin-top:10px">
                        <el-image style="width: 150px; height: 150px">
                        </el-image>
                        <div style="width: 150px;margin:0 auto;text-align:left">
                            <el-link :underline="false">Unknown Pleasures</el-link>
                            <span style="font-size:12px;color:#999">1979-06-14</span>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="详细介绍" name="introduction">
                <p v-html="artist.introduction.replace(/\r\n/g, '<br/>')" style="text-align:left;font-size:12px;line-height:25px">
                </p>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import SongList from '../components/SongList.vue'
export default {
    data(){
        return {
            activeItem:"songList",
            artist: null
        }
    },
    components:{
        SongList
    },
    computed:{
        styles:function(){
            if(this.artist.styles){
                var styles = ""
                for (let style of this.artist.styles){
                    styles += (style+"、")
                }
                return styles.substring(0, styles.length-1)
            }
            else{
                return ""
            }
        }
    },
    created(){
        this.ajax.get("artist/"+this.$route.params.id+"/",null,null,(data)=>{
            this.artist = data
        },(errorData)=>{

        })
    }
}
</script>

<style>

</style>