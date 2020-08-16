<template>
    <div>
        <el-table
            :data="songList"
            @cell-mouse-enter="cellMouseEnter"
            @cell-mouse-leave="cellMouseLeave">
            <el-table-column
                type="index"
                width="50"
                :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column
                label="歌曲">
                <template slot-scope="scope">
                    <el-row>
                        <el-col :span="scope.row.songNameWidth" class="songNameCol">
                            <!-- <span style="line-height:28.5px;">{{ scope.row.name }}</span> -->
                            <router-link :to="{name:'Song',params:{id:'1'}}" v-slot="{ href }">
                                <el-link :href="href" :underline="false">{{ scope.row.name }}</el-link>
                            </router-link>
                        </el-col>
                        <el-col :span="scope.row.songBtnWidth">
                            <div>
                                <el-button @click="play(scope.$index)" icon="el-icon-video-play" size="mini" circle></el-button>
                                <el-button icon="el-icon-folder-add" size="mini" circle></el-button>
                            </div>
                        </el-col>
                    </el-row>
                </template>
            </el-table-column>
            <el-table-column
                label="歌手"
                v-if="showtype != 'artist'">
                <template slot-scope="scope">
                    <el-row>
                        <!-- <el-col v-for="artist in scope.row.artists"  :key="artist.id" :span="24/scope.row.artists.length" class="songNameCol">
                            <span style="line-height:28.5px;">{{ artist.name }}</span>
                        </el-col> -->
                        <router-link v-for="(artist,i) in scope.row.artists" :key="artist.id" :to="{name:'Artist',params:{id:artist.id}}" v-slot="{ href }">
                            <span>
                                <el-link :href="href" :underline="false" style="vertical-align:baseline;">{{ artist.name }}</el-link>
                                <span v-if="i!=scope.row.artists.length-1" style="color:#a6a9ad"> / </span>
                            </span>
                        </router-link>
                    </el-row>
                </template>
            </el-table-column>
            <el-table-column
                label="专辑"
                v-if="showtype != 'album'">
                <template slot-scope="scope">
                    <router-link :to="{name:'Album',params:{id:'1'}}" v-slot="{ href }">
                        <el-link :href="href" :underline="false">{{ scope.row.album.name }}</el-link>
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column
                prop="duration"
                label="时长">
                <template slot-scope="scope">
                    <span>{{ formatTime(scope.row.duration) }}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    methods:{
        cellMouseEnter:function(row, column, cell, event){
            row.songNameWidth = 12;
            row.songBtnWidth = 12;
        },
        cellMouseLeave:function(row, column, cell, event){
            row.songNameWidth = 24;
            row.songBtnWidth = 0;
        },
        play(index){
            this.$store.commit('playSong',{'index':index,'songList':this.songList})
            this.$EventBus.$emit("cutSong");
        },
        formatTime(time){
            let it = parseInt(time)
            let m = parseInt(it/60)
            let s = parseInt(it%60)
            return (m<10?"0":"")+parseInt(it/60)+":"+(s<10?"0":"")+parseInt(it%60)
        },
    },
    props:{
        showtype:{
            type:String,
            default:"playList",
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['playList', 'album', 'artist'].indexOf(value) !== -1
            }
        },
        songList:{
            type:Array
        }
    },
    created:function(){
        this.songList = this.songList.map((currentValue,index,arr)=>{
            // Object.assign(currentValue,{songNameWidth:24,songBtnWidth:0})
            // currentValue.songNameWidth = 24
            // currentValue.songBtnWidth = 0
            this.$set(currentValue,'songNameWidth',24)
            this.$set(currentValue,'songBtnWidth',0)
            return currentValue
        })
    }

}
</script>

<style scoped>
.songNameCol{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    line-height:28.67px
}
</style>