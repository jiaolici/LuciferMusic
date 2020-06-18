<template>
    <div>
        <h1>榜单</h1>
        <el-divider></el-divider>
        <el-row>
            <el-col :span="6">
                <div style="height:120px">
                    <el-image style="width: 100px; height: 100px; float:left">
                    </el-image>
                    <div style="width:100; margin-left:10px; float:left">
                        <p style="margin-top:0px">BillBord排行榜</p>
                        <div>
                            <el-button icon="el-icon-video-play" circle></el-button>
                            <el-button icon="el-icon-folder-add" circle></el-button>
                        </div>
                    </div>
                </div>
                <el-table 
                :data="tableData"
                :show-header="false"
                @cell-mouse-enter="cellMouseEnter"
                @cell-mouse-leave="cellMouseLeave">
                    <el-table-column
                        prop="Song">
                        <template slot-scope="scope">
                            <el-row>
                                <el-col :span="scope.row.songNameWidth" class="songNameCol">
                                    <span style="line-height:28.5px;">{{ scope.row.Song }}</span>
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
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tableData:[
                {
                    Song:"Free Bird111111111111111111",
                    songNameWidth:24,
                    songBtnWidth:0
                }
            ],
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