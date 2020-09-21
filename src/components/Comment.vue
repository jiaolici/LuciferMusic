<template>
    <div>
        <div style="text-align:left">
            <h4>
                评论
                <span style="font-size:14px;margin-left:15px;color:#999">
                    共{{ total }}条评论
                </span>
            </h4>
        </div>
        <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="comment_content"
            maxlength="300"
            show-word-limit>
        </el-input>
        <el-button @click="commentHandle(null,comment_content)" size="small" style="float:right;margin-top:10px">发表评论</el-button>
        <div style="clear:both"></div>
        <el-divider></el-divider>
        <div v-for="comment in comments" :key="comment.id" style="text-align:left;">
            <el-avatar shape="square" style="float:left" :src="comment.user.avatar"></el-avatar>
            <!-- <div style="clear:both"></div> -->
            <div style="padding-left:50px;position:relative">
                <el-link :underline="false" type="primary">{{comment.user.username}}</el-link>
                <p style="margin-top:6px;font-size:14px;margin-bottom:6px;">{{comment.content}}</p>
                <!-- <el-row>
                    <el-col :span="20">
                        <span style="font-size:14px;line-height:29px;color:#999">{{comment.datetime}}</span>
                    </el-col>
                    <el-col :span="4">
                        <el-button type="text" size="mini">
                            <i class="zi zi_digg"></i>{{" ("+comment.praise+")"}}
                        </el-button>
                    </el-col>
                </el-row> -->
                <span style="font-size:14px;line-height:19px;color:#999">{{comment.pub_time}}</span>
                <div style="float:right;line-height:19px;">
                    <el-link v-if="comment.is_praised" type="primary" :underline="false" @click="praiseClick(comment)" style="margin-right:20px">
                        <i class="zi zi_digg"></i>{{" ("+comment.pra_count+")"}}
                    </el-link>
                    <el-link v-else :underline="false" @click="praiseClick(comment)" style="margin-right:20px">
                        <i class="zi zi_digg"></i>{{" ("+comment.pra_count+")"}}
                    </el-link>
                    <el-link :underline="false" @click="replayHandle(comment)">
                        <i class="zi zi_commentalt"></i>
                    </el-link>
                </div>
            </div>
            <transition name="replay-tran">
            <el-row v-if="comment.replay_show" style="padding-left:50px;margin-top:10px">
                <el-col :span="22">
                    <el-input v-model="comment.replay_content" size="mini" placeholder="回复" maxlength="300" show-word-limit></el-input>
                </el-col>
                <el-col :span="2">
                    <el-button @click="commentHandle(comment.id,comment.replay_content)" size="mini" style="float:right;">回复</el-button>
                </el-col>
            </el-row>
            </transition>
            <el-divider></el-divider>
        </div>
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size=5
            :total="total"
            @current-change="handleCurrentChange"
            :current-page="currentPage">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data(){
        return {
            comments:[],
            comment_content:"",
            total:0,
            currentPage:1
        }
    },
    methods:{
        praiseClick:function(comment){
            if(!this.$store.state.loginUser){
                this.$message({type: 'error',message: '请先登录!',showClose: true,center:true,duration:1000})
                return
            }
            if(comment.is_praised){
                comment.is_praised = false
            }
        },
        replayHandle:function(comment){
            comment.replay_show = !comment.replay_show
        },
        handleCurrentChange: function(currentPage){
            this.currentPage = currentPage;
            // console.log(this.currentPage)  //点击第几页
            this.ajax.get("comment/",{page:currentPage,type:this.type,target_id:this.target_id},null,(data)=>{
                this.total = data.count
                this.comments = data.results.map((currentValue,index,arr)=>{
                currentValue.praise = 0
                currentValue.replay_show = false
                currentValue.replay_content = ""
                return currentValue
            })
            },null)
        },
        commentHandle:function(replay_target_id,content){
            if(!content){
                this.$message({type: 'error',message: '评论不能为空!',showClose: true,center:true,duration:1000})
                return
            }
            if(!this.$store.state.loginUser){
                this.$message({type: 'error',message: '请先登录!',showClose: true,center:true,duration:1000})
                return
            }
            var postData = {
                user_id:this.$store.state.loginUser.id,
                replay_target_id:null,
                content:content,
                content_type:this.type,
                object_id:this.target_id
            }
            if(replay_target_id){
                postData.replay_target_id = replay_target_id
            }
            this.ajax.post("comment/",postData,null,(data)=>{
                    this.total+=1
                    if(replay_target_id){
                        for(var comment of this.comments){
                            console.log(comment,this.comments)
                            if(replay_target_id == comment.id){
                                comment.replay_content = ""
                                break
                            }
                        }
                    }
                    else{
                        this.comment_content = ""
                    }
                    this.$message({type: 'success',message: '评论成功!',showClose: true,center:true,duration:1000})
                },null)
        }
    },
    props:{
        type:{
            type:String,
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['album', 'songlist','song'].indexOf(value) !== -1
            }
        },
        target_id:{
            type:Number
        }
    },
    created(){
        this.ajax.get("comment/",{page:1,type:this.type,target_id:this.target_id},null,(data)=>{
            this.total = data.count
            this.comments = data.results.map((currentValue,index,arr)=>{
                currentValue.praise = 0
                currentValue.replay_show = false
                currentValue.replay_content = ""
                return currentValue
            })
        },null)
    }
}
</script>

<style>
.replay-tran-enter-active, .replay-tran-leave-active {
    transition: opacity .5s;
}

.replay-tran-enter, .replay-tran-leave-to {
  opacity: 0;
}

</style>