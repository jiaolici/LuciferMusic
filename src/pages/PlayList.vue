<template>
    <div>
        <el-image style="width:150px;height:150px;float:left"></el-image>
        <div style="padding-left:200px;text-align:left">
            <h3>激流金属/CROSSOVER</h3>
            <el-row style="height:30px">
                <el-col>
                    <el-avatar shape="square" size="small"></el-avatar>
                    <el-link :underline="false" style="vertical-align:top;line-height:30px;margin-left:10px">我自己</el-link>
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
                <el-button icon="el-icon-video-play" size="small">播放</el-button>
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
                    <el-tag size="mini" style="margin-right:10px">欧美</el-tag>
                    <el-tag size="mini" style="margin-right:10px">摇滚</el-tag>
                    <el-tag size="mini" style="margin-right:10px">金属</el-tag>
                    <el-tag size="mini" style="margin-right:10px">激流</el-tag>
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
                        一个歌单111111111111111111,1111111111111111111111111111111111111111111,11111111111111111,11111111111111111111111111111111
                    </div>
                </el-col>
            </el-row>
        </div>
        <SongList showtype="playlist">
        </SongList>
        <Comment>
        </Comment>
    </div>
</template>

<script>
import SongList from '../components/SongList.vue'
import Comment from '@/components/Comment.vue'
export default {
    data(){
        return {
            
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