<template>
    <div style="position:fixed;width:100%;left:0;bottom:0;right:0;z-index:1000;height:0px">
        <div class="transitionDiv" @mouseenter="showPlayer" @mouseleave="hiddenPlayer" ref="playerContent" style="position:absolute;height:70px;left:0;width:100%;top:-10px;">
            <div style="height:10px"></div>
            <div class="play-container">
                <el-row>
                    <el-col :span="3">
                        <el-button-group>
                            <el-button icon="el-icon-d-arrow-left" size="small" circle></el-button>
                            <el-button :icon="playIcon" @click="play" size="small" circle></el-button>
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
                        <el-slider v-model="music.currentTime" :max="music.maxTime" :format-tooltip="formatTime" @change="changeCurrentTime"></el-slider>
                    </el-col>
                    <el-col :span="4">
                        <div>
                            <span>{{currentTimeFormat}}</span>
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
                                :show-tooltip="false"
                                @change="changeVolume">
                            </el-slider>
                            <el-button size="small" slot="reference" circle>
                                <i class="zi zi_volumeup"></i>
                            </el-button>
                        </el-popover>        
                    </el-col>
                </el-row>
                <audio ref="audio" :src="music.audioUrl" @timeupdate="onTimeupdate" @ended="onEnded">
                </audio>
            </div>
        </div>
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
                audioUrl:"http://127.0.0.1:8081/lucifermusic/song?id=1"
            },
            top:-10,
            status:"hidden",
            riseInterval:null,
            downInterval:null,
            downTimeout:null,
            mouseStatus:"leave"
        }
    },
    computed:{
        maxTimeFormat:function(){
            return this.formatTime(this.music.maxTime);
        },
        currentTimeFormat:function(){
            return this.formatTime(this.music.currentTime);
        },
        playIcon:function(){
            if(this.music.isPlay){
                return "el-icon-video-pause"
            }
            else{
                return "el-icon-video-play"
            }
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
            if(this.music.isPlay){
                this.$refs.audio.pause()
            }
            else{
                this.$refs.audio.play()
            }
            this.music.isPlay = !this.music.isPlay
            // this.ajax.get("audio",{"id":1}, "arraybuffer", r=>{
            //     console.log(r);
            //     this.music.audio.decodeAudioData(r,function(buffer){
            //         console.log("decode success");
            //         var source = this.music.audio.createBufferSource();
            //         source.buffer = buffer;//  告诉音频源 播放哪一段音频
            //         //console.log(this.music,buffer);
            //     }, function(e) {
            //         console.log("decode failed" + e);
            //     })
            // });
        },
        onTimeupdate(){
            this.music.currentTime = this.$refs.audio.currentTime;
        },
        onEnded(){
            this.music.isPlay = !this.music.isPlay;
            this.music.currentTime = 0;
        },
        changeCurrentTime(index) {
            if(this.music.isPlay){
                this.$refs.audio.currentTime = index;
            }
            else{
                this.play();
                this.$refs.audio.currentTime = index;
            }
        },
        changeVolume(volume){
            this.$refs.audio.volume = volume/100;
        },
        showPlayer(){
            // this.$refs.playerContent.style.transitionDelay = "0s";
            // this.$refs.playerContent.style.top = "-70px";
            this.mouseStatus = "enter";
            //防止在播放条上升时再次触发
            if (this.status=="rise"){
                return
            }
            clearInterval(this.downInterval)
            clearTimeout(this.downTimeout)
            this.status = "rise";
            this.riseInterval = setInterval(()=>{
                if(this.top>-70){
                    if(this.top%5!=0){
                        this.top = Math.round(this.top/5)*5
                    }
                    this.top = this.top-5;
                    this.$refs.playerContent.style.top = this.top+"px";
                }
                else{
                    this.status = "show";
                    clearInterval(this.riseInterval);
                    if(this.mouseStatus=="leave"){
                        this.hiddenPlayer()
                    }
                }
            },10)
        },
        hiddenPlayer(){
            // this.$refs.playerContent.style.transitionDelay = "1s";
            // this.$refs.playerContent.style.top = "-10px";
            this.mouseStatus = "leave"
            if (this.status=="rise"){
                return
            }
            clearInterval(this.riseInterval)
            //this.status = "waitDown"
            this.downTimeout = setTimeout(()=>{
                if(this.mouseStatus=="leave"){
                    this.downInterval = setInterval(()=>{
                        if(this.top<-10){
                            this.status = "down"
                            this.top = this.top+1;
                            this.$refs.playerContent.style.top = this.top+"px";
                        }
                        else{
                            this.status = "hidden"
                            clearInterval(this.downInterval);
                        }
                    },10)
                }
            },500)
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
.transitionDiv{
    /* transition: top 0.5s;
    transition-delay: 0s; */
}
</style>