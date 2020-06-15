<template>
    <div>
        <el-image style="width:150px;height:150px;float:left"></el-image>
        <div style="padding-left:200px;text-align:left">
            <h3>Insight</h3>
            <el-row style="height:30px">
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        歌手：
                        <el-link :underline="false" style="vertical-align:baseline;">Joy Division</el-link>
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
                        专辑：
                        <el-link :underline="false" style="vertical-align:baseline;">Unknown Pleasures</el-link>
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
                111
                <br>
                222
                <br>
                333
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>