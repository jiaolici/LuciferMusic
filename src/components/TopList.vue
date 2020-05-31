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
                <el-table :data="tableData" :show-header="false">
                    <el-table-column
                        prop="Song">
                    </el-table-column>
                    <el-table-column>
                        <template>
                            <div>
                                <el-button icon="el-icon-video-play" size="mini" circle></el-button>
                                <el-button icon="el-icon-folder-add" size="mini" circle></el-button>
                            </div>
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
            tableData:[{
                Song:"Free Bird"
            }],
        }
    },
    methods:{
    }
}
</script>

<style scoped>
</style>