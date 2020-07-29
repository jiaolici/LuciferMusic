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
                            <span style="line-height:28.5px;">{{ scope.row.name+scope.row.songNameWidth }}</span>
                        </el-col>
                        <el-col :span="scope.row.songBtnWidth">
                            <div>
                                <el-button icon="el-icon-video-play" size="mini" circle></el-button>
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
                        <el-col v-for="artist in scope.row.artists"  :key="artist.id" :span="24/scope.row.artists.length" class="songNameCol">
                            <span style="line-height:28.5px;">{{ artist.name }}</span>
                        </el-col>
                    </el-row>
                </template>
            </el-table-column>
            <el-table-column
                prop="album.name"
                label="专辑"
                :show-overflow-tooltip="true"
                v-if="showtype != 'album'">
            </el-table-column>
            <el-table-column
                prop="duration"
                label="时长">
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
            console.log(this.songList[0].songNameWidth)
            console.log(this.songList[1].songNameWidth)
        },
        cellMouseLeave:function(row, column, cell, event){
            row.songNameWidth = 24;
            row.songBtnWidth = 0;
            console.log("b")
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
            Object.assign(currentValue,{songNameWidth:24,songBtnWidth:0})
            return currentValue
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