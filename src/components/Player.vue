<template>
    <div class="play-container">
        <el-row>
            <el-col :span="3">
                <el-button-group>
                    <el-button icon="el-icon-d-arrow-left" size="small" circle></el-button>
                    <el-button icon="el-icon-video-play" size="small" circle></el-button>
                    <el-button icon="el-icon-d-arrow-right" size="small" circle></el-button>
                </el-button-group>
            </el-col>
            <el-col :span="2">
                <el-avatar shape="square" size="medium">封面</el-avatar>
            </el-col>
            <el-col :span="12">
                <el-slider v-model="music.currentTime" :max="music.maxTime" :format-tooltip="formatTime"></el-slider>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            music:{
                isPlay:false,
                currentTime:0,
                maxTime:180,
                volume:100
            }
        }
    },
    methods:{
        formatTime(time){
            let it = parseInt(time)
            let m = parseInt(it/60)
            let s = parseInt(it%60)
            return (m<10?"0":"")+parseInt(it/60)+":"+(s<10?"0":"")+parseInt(it%60)
      }
    }
}
</script>

<style scoped>
.play-container{
    background-color: #303133;
    color: #fff;
    line-height: 60px;
}
.el-row{
    height:60px;
    width:1000px;
    margin:0 auto;
    background-color: #303133;
    color: #fff;
    line-height: 60px;
}
.el-col{
    height:60px;

}
.el-avatar{
    margin-top: 12px;
}
.el-slider{
    margin-top: 11px;
}
</style>