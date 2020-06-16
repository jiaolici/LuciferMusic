<template>
    <div>
        <el-divider></el-divider>
        <div v-for="comment in comments" :key="comment.id">
            <el-avatar shape="square" :size="small" style="float:left"></el-avatar>
            <!-- <div style="clear:both"></div> -->
            <el-link :underline="false">{{comment.username}}</el-link>
            <el-divider></el-divider>
        </div>
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
                    praise:10
                },
                {
                    id:2,
                    username:"观星者",
                    content:"123123",
                    datetime:"2012-3-2 14:02:55",
                    praise:10
                }
            ]
        }
    }
}
</script>

<style>

</style>