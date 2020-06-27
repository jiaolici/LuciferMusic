<template>
    <div>
        <div class="user_background" :style="{backgroundImage:album_cover}">
            <el-avatar :size="100"> user </el-avatar>
            <h1 style="margin-top:10px">jiaolici</h1>
            <el-row>
                <el-col :span="11" class="left-col">
                    <span class="user_statistic_num">1645</span>
                    <span class="user_statistic_desc">听歌数</span>
                </el-col>
                <el-col :span="2">
                    <div style="height:40px;width:1px;margin:0 auto;border-right:solid 1px #24313d">
                    </div>
                </el-col>
                <el-col :span="11" class="right-col">
                    <span class="user_statistic_num">12568Min</span>
                    <span class="user_statistic_desc">听歌时长</span>
                </el-col>
            </el-row>
        </div>
        <el-tabs v-model="activeItem">
            <el-tab-pane label="喜欢的歌曲" name="favSongs">
                <SongList>
                </SongList>
            </el-tab-pane>
            <el-tab-pane label="创建的歌单" name="createdSongLists">
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
            <el-tab-pane label="收藏的歌单" name="collectedSongLists">
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
            <el-tab-pane label="收藏的专辑" name="collectedAlbum">
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
        </el-tabs>
    </div>
    
</template>

<script>
import user_background from '../images/user_background1.jpg'
import SongList from '../components/SongList.vue'
export default {
    data(){
        return {
            album_cover:"url(" + user_background + ")",
            activeItem:"favSongs"
        }
    },
    components:{
        SongList
    }
}
</script>

<style>
.user_background{
    height:270px;
    background-repeat: no-repeat;
    padding-top: 50px;
    color:#fff;
}
.user_statistic_num{
    display: block;
    font-size: 20px;
    line-height: 20px;
}
.user_statistic_desc{
    display: block;
    font-size: 12px;
    line-height: 2;
    color:#666
}
.left-col{
    text-align: right;
}
.right-col{
    text-align: left;
}
</style>