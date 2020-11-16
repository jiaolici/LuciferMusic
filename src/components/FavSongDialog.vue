<template>
    <el-dialog
        :visible.sync="visible"
        width="400px"
        custom-class = "loginDialog"
        @close = "$emit('favsongdialog-close')">
        <el-button icon="el-icon-circle-plus-outline" style="width: 100%" @click="addNewSl">新歌单</el-button>
        <el-table
            :data="list"
            :stripe="true"
            style="width: 100%;height: 400px"
            :show-header="false"
            :cell-style="{padding:0}"
            @cell-mouse-enter="changeCursor"
            @row-click="addToClick">
            <el-table-column>
                <template slot-scope="scope">
                    <div style="margin:8px 0">
                    <el-avatar shape="square" style="float:left" :src="scope.row.cover">
                    </el-avatar>
                    <div style="padding-left:50px;position:relative">
                        <p style="margin:0;line-height:20px;margin-bottom:8px">{{scope.row.name}}</p>
                        <p style="margin:0;font-size:12px;line-height:12px">{{scope.row.songs.length}}首歌</p>
                    </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog 
            :visible.sync="newListVisible"
            width="400px"
            custom-class = "loginDialog"
            append-to-body>
            <el-form ref="newListForm" :model="newListForm" :rules="rules" size="small" style="padding:20px 60px;" label-width="70px">
                <el-form-item prop="name" label="歌单名">
                    <el-input v-model="newListForm.name" placeholder="歌单名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="addNewSongList" type="primary" size="small">确定</el-button>
                    <el-button @click="newListVisible=false">取消</el-button>
                </el-form-item>
            </el-form>
            <template slot="title">
                <div>
                <h4 style="margin:0;line-height:40px;color:#fff;text-align:center">新建歌单</h4>
                </div>
            </template>
        </el-dialog>
        <template slot="title">
            <div>
            <h4 style="margin:0;line-height:40px;color:#fff">添加到歌单</h4>
            </div>
        </template>
    </el-dialog>
</template>

<script>
export default {
    data(){
        return {
            list:[
            ],
            newListVisible:false,
            newListForm:{
                name:""
            },
            rules:{
                name:[
                    {required:true,message:"请输入歌单名",trigger:'blur'}
                ]
            }
        }
    },
    methods:{
        changeCursor:function(row, column, cell, event){
            cell.style.cursor = 'pointer'
        },
        addNewSl:function(){
            // this.ajax.post
            this.newListVisible = true
        },
        addNewSongList:function(){
            this.$refs.newListForm.validate(valid=>{
                if(!valid){
                    return false
                }
                else{
                    this.ajax.post("songlist/",{
                        name:this.newListForm.name,
                        creator_id:this.$store.state.loginUser.id,
                        },null,(data)=>{
                        this.newListVisible = false
                        this.loadSongList()
                    },(errorData)=>{
                        this.$message({type: 'error',message: '新建失败!',showClose: true,center:true,duration:1000})
                    })
                }
            })
        },
        loadSongList:function(){
            this.ajax.get("songlist/",{creator_id:this.$store.state.loginUser.id},null,(data)=>{
                this.list = data
            },errorData=>{
                console.log("errrrrr")
            })
        },
        addToClick:function(row, column, event){
            // console.log(row, column, event,this.songId)
            this.ajax.patch("songlistop/"+row.id+"/",{songIds:[this.songId]},null,(data)=>{
                console.log(data)
            },(errorData)=>{
                console.log(errorData)
            })
        }
    },
    props:{
        visible:{
            type:Boolean
        },
        songId:{
            type:Number
        }
    },
    watch:{
        visible:{
            handler:function(ov,nv){
                if(ov){
                    this.loadSongList()
                }
            },
            immediate:true,
            deep: true
        }
    },
    created(){
        // this.loadSongList()
    }
}
</script>

<style scoped>
</style>