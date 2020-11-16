<template>
    <div style="position:fixed;width:100%;left:0;bottom:0;right:0;z-index:1000;height:0px">
        <div class="transitionDiv" @mouseenter="showPlayer" @mouseleave="hiddenPlayer" ref="playerContent" style="position:absolute;height:70px;left:0;width:100%;top:-10px;">
            <div style="height:10px"></div>
            <div class="play-container">
                <el-row>
                    <el-col :span="3">
                        <el-button-group>
                            <el-button icon="el-icon-d-arrow-left" @click="handlePre" size="small" circle></el-button>
                            <el-button :icon="playIcon" @click="play" size="small" circle></el-button>
                            <el-button icon="el-icon-d-arrow-right" @click="handleNext" size="small" circle></el-button>
                        </el-button-group>
                    </el-col>
                    <el-col :span="2">
                        <el-avatar shape="square" size="medium" :src="song.album.cover" style="border:1px solid black;">封面</el-avatar>
                    </el-col>
                    <el-col :span="11">
                        <div style="line-height:20px;height:20px">
                            <router-link v-if="song.id" :to="{name:'Song',params:{id:song.id}}" v-slot="{ href }">
                                <el-link :href="href" type="info">{{ song.name }}</el-link>
                            </router-link>
                            <el-link v-else type="info">{{ song.name }}</el-link>
                            <span style="color:#a6a9ad"> -- </span>
                            <span v-for="(artist,i) in song.artists" :key="artist.name">
                                <router-link v-if="artist.id" :to="{name:'Artist',params:{id:artist.id}}" v-slot="{ href }">
                                    <span>
                                        <el-link :href="href" type="info">{{ artist.name }}</el-link>
                                        <span v-if="i!=song.artists.length-1" style="color:#a6a9ad"> / </span>
                                    </span>
                                </router-link>
                                <span v-else>
                                    <el-link type="info">{{ artist.name }}</el-link>
                                    <span v-if="i!=song.artists.length-1" style="color:#a6a9ad"> / </span>
                                </span>
                            </span>
                        </div>
                        <el-slider v-model="currentTime" :max="song.duration" :format-tooltip="formatTime" @change="changeCurrentTime"></el-slider>
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
                                v-model="volume"
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
                <audio ref="audio" :src="song.audio" @timeupdate="onTimeupdate" @ended="onEnded">
                </audio>
                <!-- <audio v-else ref="audio">
                </audio> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            song:{
                id:null,
                artists:[
                    {
                        id:null,
                        name:"歌手"
                    }
                ],
                album:{
                    id:null,
                    name:"专辑"
                },
                name:"歌曲",
                audio:null,
                lyric:null,
                duration:0
            },
            isPlaying:false,
            volume:100,
            currentTime:0,
            status:"hidden",
            mouseStatus:"leave",
            playingId:null,
            startTime:null,
        }
    },
    computed:{
        maxTimeFormat:function(){
            return this.formatTime(this.song.duration);
        },
        currentTimeFormat:function(){
            return this.formatTime(this.currentTime);
        },
        playIcon:function(){
            if(this.isPlaying){
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
            if(this.isPlaying){
                this.$refs.audio.pause()
            }
            else{
                this.$refs.audio.play()
            }
            this.isPlaying = !this.isPlaying
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
        handleNext(){
            this.$store.commit('nextSong')
            this.cutSong()
        },
        handlePre(){
            this.$store.commit('preSong')
            this.cutSong()
        },
        cutSong(){
            if (this.playingId&&this.startTime) {
                var endTime = new Date()
                var timeDiff = Math.floor((endTime.getTime()-this.startTime.getTime())/1000)
                if(this.playingId==this.song.id && timeDiff>(this.song.duration-30)){
                    this.ajax.post("listenrecord/",{content_type:"song",object_id:this.playingId},null,(data)=>{

                    },(errData)=>{

                    })
                }
            }
            // console.log(this.playingId,this.song.id,this.startTime,new Date())
            if(this.isPlaying){
                this.$refs.audio.pause()
            }
            this.song = this.$store.state.player.playingList[this.$store.state.player.playingSong]
            this.isPlaying = true
            this.$nextTick(()=>{
                this.$refs.audio.currentTime = 0
                this.$refs.audio.play()
            })
            this.playingId = this.song.id
            this.startTime = new Date()
        },
        onTimeupdate(){
            this.currentTime = this.$refs.audio.currentTime;
        },
        onEnded(){
            // this.isPlaying = !this.isPlaying;
            // this.currentTime = 0;
            this.handleNext()
        },
        changeCurrentTime(index) {
            if(this.isPlaying){
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
          this.mouseStatus = "enter"
          this.$refs.playerContent.style.transitionDelay = "0s";
          this.$refs.playerContent.style.top = "-70px";
          this.status = "rise"
          setTimeout(()=>{
            this.status = "show"
            if(this.mouseStatus=="leave"){
              this.hiddenPlayer()
            }
          },500)
        },
        hiddenPlayer(){
          this.mouseStatus = "leave"
          if(this.status == "rise"){
            return
          }
          this.$refs.playerContent.style.transitionDelay = "1s";
          this.$refs.playerContent.style.top = "-10px";
          this.status = "hidden"
        }
    },
    created(){
        this.$EventBus.$on("cutSong",this.cutSong)
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
    transition: top 0.5s;
    transition-delay: 0s;
}
</style>