<template>
    <div class="play-container">
        <el-row>
            <el-col :span="3">
                <el-button-group>
                    <el-button icon="el-icon-d-arrow-left" size="small" circle></el-button>
                    <el-button icon="el-icon-video-play" @click="play" size="small" circle></el-button>
                    <el-button icon="el-icon-d-arrow-right" size="small" circle></el-button>
                </el-button-group>
            </el-col>
            <el-col :span="2">
                <el-avatar shape="square" size="medium">封面</el-avatar>
            </el-col>
            <el-col :span="11">
                <div style="line-height:20px;height:20px">
                    <el-link type="info">{{music.name}}</el-link>
                    <span style="color:#a6a9ad"> -- </span>
                    <el-link type="info">{{music.artist}}</el-link>
                </div>
                <el-slider v-model="music.currentTime" :max="music.maxTime" :format-tooltip="formatTime"></el-slider>
            </el-col>
            <el-col :span="4">
                <div>
                    <span>00:00</span>
                    <span> / </span>
                    <span>{{maxTimeFormat}}</span>
                </div>
            </el-col>
            <el-col :span="4">
                <el-popover placement="top" trigger="click" width="20px" popper-class="volume-popper">
                    <el-slider
                        v-model="music.volume"
                        vertical
                        height="200px"
                        :show-tooltip="false">
                    </el-slider>
                    <el-button size="small" slot="reference" circle>
                        <i class="zi zi_volumeup"></i>
                    </el-button>
                </el-popover>        
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
                volume:100,
                artist:"歌手",
                name:"歌曲",
                audio:new AudioContext(),
                //bufferSource:music.audio.createBufferSource()
            }
        }
    },
    computed:{
        maxTimeFormat:function(){
            return this.formatTime(this.music.maxTime);
        }
    },
    methods:{
        formatTime(time){
            let it = parseInt(time)
            let m = parseInt(it/60)
            let s = parseInt(it%60)
            return (m<10?"0":"")+parseInt(it/60)+":"+(s<10?"0":"")+parseInt(it%60)
        },
        play(){
            this.ajax.get("audio",{"id":1}, "arraybuffer", r=>{
                console.log(r);
                this.music.audio.decodeAudioData(r,function(buffer){
                    console.log("decode success");
                    var source = this.music.audio.createBufferSource();
                    source.buffer = buffer;//  告诉音频源 播放哪一段音频
                    //console.log(this.music,buffer);
                }, function(e) {
                    console.log("decode failed" + e);
                })
            });
        }
    },
    created(){
        this.ajax.get('music', {'id':1}, "json", r => {
            this.music.artist = r.artists[0].name;
            this.music.name = r.name;
            this.music.maxTime = r.duration;
        });
        /*this.ajax.get("audio",{"id":1}, r=>{
            this.music.audio.decodeAudioData(r,function(buffer){
                console.log("decode success");
                this.music.bufferSource.buffer = buffer;
            }, function(e) {
                console.log("decode failed" + e);
            })
        });*/
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

/* .el-slider{
    margin-top: 11px;
} */
</style>
<style>
/* .el-slider__runway{
    margin: 15px 0;
} */
.volume-popper{
    min-width: 10px !important;
}
</style>