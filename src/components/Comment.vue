<template>
    <div>
        <div style="text-align:left">
            <h4>
                评论
                <span style="font-size:14px;margin-left:15px;color:#999">
                    共116691条评论
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
        <el-button size="small" style="float:right;margin-top:10px">发表评论</el-button>
        <div style="clear:both"></div>
        <el-divider></el-divider>
        <div v-for="comment in comments" :key="comment.id" style="text-align:left;">
            <el-avatar shape="square" style="float:left"></el-avatar>
            <!-- <div style="clear:both"></div> -->
            <div style="padding-left:50px;position:relative">
                <el-link :underline="false" type="primary">{{comment.username}}</el-link>
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
                <span style="font-size:14px;line-height:19px;color:#999">{{comment.datetime}}</span>
                <div style="float:right;line-height:19px;">
                    <el-link :underline="false" @click="praiseClick" style="margin-right:20px">
                        <i class="zi zi_digg"></i>{{" ("+comment.praise+")"}}
                    </el-link>
                    <el-link :underline="false" @click="replayHandle(comment)">
                        <i class="zi zi_commentalt"></i>
                    </el-link>
                </div>
            </div>
            <el-row v-if="comment.replay_show" style="padding-left:50px;margin-top:10px">
                <el-col :span="22">
                    <el-input v-model="comment.replay_content" size="mini" placeholder="回复" maxlength="300" show-word-limit></el-input>
                </el-col>
                <el-col :span="2">
                    <el-button size="mini" style="float:right;">回复</el-button>
                </el-col>
            </el-row>
            <el-divider></el-divider>
        </div>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data(){
        return {
            comments:[
                {
                    id:1,
                    username:"观星者",
                    content:"123123",
                    datetime:"2012-3-2 14:02:55",
                    praise:10,
                    replay_show:false,
                    replay_content:""
                },
                {
                    id:2,
                    username:"观星者",
                    content:"123123",
                    datetime:"2012-3-2 14:02:55",
                    praise:10,
                    replay_show:false,
                    replay_content:""
                }
            ],
            comment_content:""
        }
    },
    methods:{
        praiseClick:function(){
            console.log("xxx");
        },
        replayHandle:function(comment){
            comment.replay_show = !comment.replay_show
        }
    }
}
</script>

<style>

</style>