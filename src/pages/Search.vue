<template>
    <div style="margin-top:50px">
        <el-input v-model="input" style="width:400px">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <div style="margin-top:50px">
            <div style="text-align:left"><span style="font-size:12px;color:#999">搜索"enter sandman"，找到20000条单曲</span></div>
            <el-tabs v-model="activeItem">
                <el-tab-pane label="单曲" name="songs">
                    <SongList>
                    </SongList>
                </el-tab-pane>
                <el-tab-pane label="歌手" name="artists">
                    <el-row>
                    <el-col :span="4">
                        <el-avatar :size="100"> artist </el-avatar>
                        <p style="width: 100px;margin:0 auto"><el-link :underline="false">无下划线</el-link></p>
                    </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="专辑" name="albums">
                    <el-row>
                        <el-col :span="6">
                            <el-image style="width: 150px; height: 150px">
                            </el-image>
                            <div style="width: 150px;margin:0 auto;text-align:left">
                                <el-link :underline="false">Unknown Pleasures</el-link>
                                <span style="font-size:12px;color:#999">1979-06-14</span>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <el-image style="width: 150px; height: 150px">
                            </el-image>
                            <div style="width: 150px;margin:0 auto;text-align:left">
                                <el-link :underline="false">Unknown Pleasures</el-link>
                                <span style="font-size:12px;color:#999">1979-06-14</span>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <el-image style="width: 150px; height: 150px">
                            </el-image>
                            <div style="width: 150px;margin:0 auto;text-align:left">
                                <el-link :underline="false">Unknown Pleasures</el-link>
                                <span style="font-size:12px;color:#999">1979-06-14</span>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <el-image style="width: 150px; height: 150px">
                            </el-image>
                            <div style="width: 150px;margin:0 auto;text-align:left">
                                <el-link :underline="false">Unknown Pleasures</el-link>
                                <span style="font-size:12px;color:#999">1979-06-14</span>
                            </div>
                        </el-col>
                        <el-col :span="6" style="margin-top:10px">
                            <el-image style="width: 150px; height: 150px">
                            </el-image>
                            <div style="width: 150px;margin:0 auto;text-align:left">
                                <el-link :underline="false">Unknown Pleasures</el-link>
                                <span style="font-size:12px;color:#999">1979-06-14</span>
                            </div>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="歌单" name="songLists">
                    <el-row>
                        <el-col :span="4">
                            <el-image style="width: 100px; height: 100px">
                            </el-image>
                            <p style="width: 100px;margin:0 auto"><el-link :underline="false">无下划线</el-link></p>
                        </el-col>
                        <el-col :span="4">
                            <el-image style="width: 100px; height: 100px">
                            </el-image>
                            <p style="width: 100px;margin:0 auto"><el-link :underline="false">无下划线</el-link></p>
                        </el-col>
                        <el-col :span="4">
                            <el-image style="width: 100px; height: 100px">
                            </el-image>
                            <p style="width: 100px;margin:0 auto"><el-link :underline="false">无下划线</el-link></p>
                        </el-col>
                        <el-col :span="4">
                            <el-image style="width: 100px; height: 100px">
                            </el-image>
                            <p style="width: 100px;margin:0 auto"><el-link :underline="false">无下划线</el-link></p>
                        </el-col>
                        <el-col :span="4">
                            <el-image style="width: 100px; height: 100px">
                            </el-image>
                            <p style="width: 100px;margin:0 auto"><el-link :underline="false">无下划线</el-link></p>
                        </el-col>
                        <el-col :span="4">
                            <el-image style="width: 100px; height: 100px">
                            </el-image>
                            <p style="width: 100px;margin:0 auto"><el-link :underline="false">无下划线</el-link></p>
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import SongList from '../components/SongList.vue'
export default {
    data(){
        return {
            input:"",
            activeItem:"songs"
        }
    },
    components:{
        SongList
    }
}
</script>

<style>

</style>