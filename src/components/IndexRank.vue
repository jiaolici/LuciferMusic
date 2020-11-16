<template>
    <div>
        <h1 class="header-index-type">榜单</h1>
        <el-divider></el-divider>
        <el-row>
            <el-col v-for="rank in ranks" :key="rank.id" :span="6">
                <div style="height:120px">
                    <el-image :src="rank.cover" style="width: 100px; height: 100px; float:left">
                    </el-image>
                    <div style="width:100px; margin-left:10px; float:left">
                        <p style="margin-top:0px" class="songNameCol">{{ rank.name }}</p>
                        <div>
                            <el-button @click="play(rank)" icon="el-icon-video-play" circle></el-button>
                            <el-button icon="el-icon-folder-add" circle></el-button>
                        </div>
                    </div>
                </div>
                <el-table 
                :data="rank.rank_songs.songs"
                :show-header="false"
                @cell-mouse-enter="cellMouseEnter"
                @cell-mouse-leave="cellMouseLeave">
                    <el-table-column
                        prop="Song">
                        <template slot-scope="scope">
                            <el-row>
                                <el-col :span="scope.row.songNameWidth" class="songNameCol">
                                    <span style="line-height:28.5px;">{{ scope.row.name }}</span>
                                </el-col>
                                <el-col :span="scope.row.songBtnWidth">
                                    <div>
                                        <el-button @click="playRankSong(rank,scope.$index)" icon="el-icon-video-play" size="mini" circle></el-button>
                                        <el-button icon="el-icon-folder-add" size="mini" circle></el-button>
                                    </div>
                                </el-col>
                            </el-row>
                         </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            ranks:[],
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
        play(rank){
            if (rank.rank_songs.songs){
                this.$store.commit('playSong',{'index':0,'songList':rank.rank_songs.songs})
                this.$EventBus.$emit("cutSong");
            }
        },
        playRankSong(rank,index){
            if (rank.rank_songs.songs){
                this.$store.commit('playSong',{'index':index,'songList':rank.rank_songs.songs})
                this.$EventBus.$emit("cutSong");
            }
        },
    },
    created(){
        this.ajax.get("index/rank",null,null,(data)=>{
            for (var rank of data){
                rank.rank_songs.songs = rank.rank_songs.songs.map((currentValue,index,arr)=>{
                    // Object.assign(currentValue,{songNameWidth:24,songBtnWidth:0})
                    currentValue.songNameWidth = 24
                    currentValue.songBtnWidth = 0
                    // this.$set(currentValue,'songNameWidth',24)
                    // this.$set(currentValue,'songBtnWidth',0)
                    return currentValue
                })
            }
            this.ranks = data
        },(errorData)=>{

        })
    }
}
</script>

<style scoped>
.songNameCol{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
}
</style>