<template>
    <div>
        <div class="album_cover" :style="{backgroundImage:album_cover}">
            <el-image style="width:150px;height:150px;float:left"></el-image>
        </div>
        <div style="padding-left:200px;text-align:left">
            <h3>Unknown Pleasures</h3>
            <el-row style="height:30px">
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        歌手：
                        <router-link to="artist" tag="span"><el-link :underline="false" style="vertical-align:baseline;">Joy Division</el-link></router-link>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        流派：punk
                    </div>
                </el-col>
            </el-row>
            <el-row style="height:30px">
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        发行公司：华纳音乐 
                    </div>
                </el-col>
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        发行时间：1979-06-14
                    </div>
                </el-col>
            </el-row>
            <el-row style="padding-top:10px">
                <el-button icon="el-icon-video-play" size="small">播放</el-button>
                <el-button icon="el-icon-folder-add" size="small">收藏</el-button>
                <el-button icon="el-icon-s-comment" size="small">评论（205154）</el-button>
            </el-row>
            <div style="line-height:25px;font-size:14px;margin-top:10px">
                2007 digitally remastered and expanded two CD edition of the influential Manchester quartet's 1979 debut album. Joy Division's influence on modern music is not only based around the band's unique sound, but also their vision, their personalities and their intense and troubled vocalist, Ian Curtis who committed suicide on the eve of their first tour of the U.S. Disc One features the original album containing 10 tracks including 'Disorder', 'She's Lost Control' and 'Interzone'. Disc Two features 12 tracks recorded live at The Factory in Manchester, April of 1980. Rhino UK.
            </div>
        </div>
        <SongList showtype="album">
        </SongList>
        <Comment>
        </Comment>
    </div>
</template>

<script>
import album_coverImag from '../images/album_cover.png'
import SongList from '../components/SongList.vue'
import Comment from '@/components/Comment.vue'
export default {
    data(){
        return {
            album_cover:"url(" + album_coverImag + ")"
        }
    },
    components:{
        SongList,
        Comment
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