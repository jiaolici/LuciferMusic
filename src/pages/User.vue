<template>
    <div class="user_background" :style="{backgroundImage:album_cover}">
        <el-avatar :size="100"> user </el-avatar>
        <h1 style="margin-top:10px">jiaolici</h1>
        <el-row>
            <el-col :span="11" class="left-col">
                <span class="user_statistic_num">1645</span>
                <span class="user_statistic_desc">听歌数</span>
            </el-col>
            <el-col :span="2">
                <div style="height:40px;width:1px;margin:0 auto;border-right:solid 1px #24313d">
                </div>
            </el-col>
            <el-col :span="11" class="right-col">
                <span class="user_statistic_num">12568Min</span>
                <span class="user_statistic_desc">听歌时长</span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import user_background from '../images/user_background1.jpg'
export default {
    data(){
        return {
            album_cover:"url(" + user_background + ")"
        }
    },
}
</script>

<style>
.user_background{
    height:320px;
    background-repeat: no-repeat;
    padding-top: 50px;
    color:#fff;
}
.user_statistic_num{
    display: block;
    font-size: 20px;
    line-height: 20px;
}
.user_statistic_desc{
    display: block;
    font-size: 12px;
    line-height: 2;
    color:#666
}
.left-col{
    text-align: right;
}
.right-col{
    text-align: left;
}
</style>