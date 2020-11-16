<template>
    <div>
        <div class="user_background" :style="{backgroundImage:album_cover}">
            <el-avatar :size="100" :src="user.avatar"> user </el-avatar>
            <h1 style="margin-top:10px">{{user.username}}</h1>
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
        <el-tabs v-model="activeItem" @tab-click="tabClick">
            <el-tab-pane label="听歌排行" name="rank">
                <SongList :songList="rank" showtype="rank">
                </SongList>
            </el-tab-pane>
            <el-tab-pane label="创建的歌单" name="createdSongLists">
                <el-row>
                    <el-col v-for="songList in createdSongLists" :key="songList.id" :span="4">
                        <el-image :src="songList.cover" style="width: 100px; height: 100px">
                        </el-image>
                        <p style="width: 100px;margin:0 auto">
                            <router-link :to="{name:'PlayList',params:{id:songList.id}}" v-slot="{ href }">
                                <el-link :href="href" :underline="false">{{ songList.name }}</el-link>
                            </router-link>
                        </p>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="收藏的歌单" name="collectedSongLists">
                <el-row>
                    <el-col v-for="songList in favSongLists" :key="songList.id" :span="4">
                        <el-image :src="songList.cover" style="width: 100px; height: 100px">
                        </el-image>
                        <p style="width: 100px;margin:0 auto">
                            <router-link :to="{name:'PlayList',params:{id:songList.id}}" v-slot="{ href }">
                                <el-link :href="href" :underline="false">{{ songList.name }}</el-link>
                            </router-link>
                        </p>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="收藏的专辑" name="collectedAlbum">
                <el-row>
                    <el-col v-for="album in favAlbum" :key="album.id" :span="6">
                        <el-image :src="album.cover" style="width: 150px; height: 150px">
                        </el-image>
                        <div style="width: 150px;margin:0 auto;text-align:left">
                            <router-link :to="{name:'Album',params:{id:album.id}}" v-slot="{ href }">
                                <el-link :href="href" :underline="false">{{ album.name }}</el-link>
                            </router-link>
                            <br>
                            <span style="font-size:12px;color:#999">{{ album.publish_date }}</span>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>
    </div>
    
</template>

<script>
import user_background from '../images/user_background1.jpg'
import SongList from '../components/SongList2.vue'
export default {
    data(){
        return {
            album_cover:"url(" + user_background + ")",
            activeItem:"rank",
            user:null,
            createdSongLists:null,
            favSongLists:null,
            favAlbum:null,
            rank:null
        }
    },
    methods:{
        loadCreatedSongList:function(){
            this.ajax.get("songlist/",{creator_id:this.user.id},null,(data)=>{
                this.createdSongLists = data
            },errorData=>{

            })
        },
        loadFavSongList:function(){
            this.ajax.get("songlist/",{fav_user_id:this.user.id},null,(data)=>{
                this.favSongLists = data
            },errorData=>{

            })
        },
        loadFavAlbum:function(){
            this.ajax.get("album/",{fav_user_id:this.user.id},null,(data)=>{
                this.favAlbum = data
            },errorData=>{

            })
        },
        loadRank:function(){
            this.ajax_async.get("song/",{user_id:this.$route.params.id},null,(data)=>{
                this.rank = data.results
                // console.log("async")
            },errorData=>{

            })
        },
        tabClick:function(tab,event){
            // console.log(tab, event);
            if(tab.paneName=="createdSongLists"){
                if(!this.createdSongLists){
                    this.loadCreatedSongList()
                }
                
            }
            else if(tab.paneName=="collectedSongLists"){
                if(!this.favSongLists){
                    this.loadFavSongList()
                }
            }
            else if(tab.paneName=="collectedAlbum"){
                if(!this.favAlbum){
                    this.loadFavAlbum()
                }
            }
            // else if(tab.paneName=="rank"){
            //     this.loadRank()
            // }
        },
        loadUser:function(){
            this.ajax.get("user/"+this.$route.params.id+"/",null,null,(data)=>{
                this.user = data
            },(errorData)=>{

            })
        }
    },
    components:{
        SongList
    },
    created(){
        this.loadRank()
        this.loadUser()
        
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