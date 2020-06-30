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
                            <span style="line-height:28.5px;">{{ scope.row.name }}</span>
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
                prop="artist"
                label="歌手"
                :show-overflow-tooltip="true"
                v-if="showtype != 'artist'">
            </el-table-column>
            <el-table-column
                prop="albumName"
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
            songList:[
                {
                    name:"Disorder",
                    albumName:"Unknown Pleasures",
                    artist:"Joy Division",
                    duration:"03:32",
                    songNameWidth:24,
                    songBtnWidth:0
                },
                {
                    name:"Day Of The Lords sa dasdasd adsasda sdasdasdasdasdasdasd",
                    albumName:"Unknown Pleasures",
                    artist:"Joy Division1111111111111111111111111111111",
                    duration:"04:49",
                    songNameWidth:24,
                    songBtnWidth:0
                },
                {
                    name:"Candidate",
                    albumName:"Unknown Pleasures",
                    artist:"Joy Division",
                    duration:"03:04",
                    songNameWidth:24,
                    songBtnWidth:0
                },
            ]
        }
    },
    methods:{
        cellMouseEnter:function(row, column, cell, event){
            console.log(row, column, cell, event);
            row.songNameWidth = 12;
            row.songBtnWidth = 12;
        },
        cellMouseLeave:function(row, column, cell, event){
            console.log(row, column, cell, event);
            row.songNameWidth = 24;
            row.songBtnWidth = 0;
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
        }
        
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