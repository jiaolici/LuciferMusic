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
        </el-row>
    </div>
</template>

<script>
export default {

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
</style>