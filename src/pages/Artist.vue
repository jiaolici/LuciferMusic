<template>
    <div>
        <el-image style="width:150px;height:150px;float:left;border-radius:50%;"></el-image>
        <div style="padding-left:200px;text-align:left;height:150px">
            <h3>Joy Division</h3>
            <el-row style="height:30px">
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        别名：快乐分裂
                    </div>
                </el-col>
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        国籍：英国
                    </div>
                </el-col>
            </el-row>
            <el-row style="height:30px">
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        代表作品：
                        <el-link :underline="false" style="vertical-align:baseline;">Love Will Tear Us Apart</el-link> 
                    </div>
                </el-col>
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        音乐风格：Post-Punk（后朋克）
                    </div>
                </el-col>
            </el-row>
            <el-row style="height:30px">
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        单曲：442
                    </div>
                </el-col>
                <el-col :span="12">
                    <div style="font-size:14px;line-height:30px">
                        专辑：47
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-tabs v-model="activeItem">
            <el-tab-pane label="热门歌曲" name="songList">
                <SongList>
                </SongList>
            </el-tab-pane>
            <el-tab-pane label="所有专辑" name="allAlbum">
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
            <el-tab-pane label="详细介绍" name="introduction">
                <p style="text-align:left;font-size:12px;line-height:25px">
                    别名：快乐分裂
                    <br>
                    国籍：英国
                    <br>
                    代表作品：Love Will Tear Us Apart
                    <br>
                    音乐风格：Post-Punk（后朋克）
                    <br>
                    出道时间：1977年
                    <br>
                    解散时间：1980年
                    <br>
                    简介：Joy Division是英国后朋克乐队中在七十年代极具影响力的一支乐队，成立于1977年，解散时间是1980年。
                    <br>
                    1977年12月，他们录制了4首新歌，渐渐的Joy Division的名气越来越大，1979年4月14日，乐队出现在了英国国家电台上，他们很快就被公众所熟悉。这些成功让他们整个夏天和秋季都在伦敦的酒吧里演出。
                    接下来的一个月，他们的单曲"Closer"爬上了BBC 专辑榜的前十，"Love Will Tear Us Apart"成了单曲榜10佳。
                    <br>
                    从艺历程：Joy Division是英国后朋克乐队中在七十年代极具影响力的一支乐队，主唱Ian Curtis更是英年早逝。
                    二十年后，Joy Division未被世人遗忘，反而成了一个黑色的神话，Ian Curtis更成了失落一代的代言人。 
                    1976年秋天，在英国曼彻斯特，有三个职业音乐人决定组成一个乐队，他们花了整个秋季来寻找合适的小提琴手。
                    在一次Sex Pistols音乐会上，他们遇见了——Ian Curtis。后来他们给自己取名叫"Warsaw"（华沙）。
                    不过，他们只在录制了一盘只有五首歌的Demo后就四分五裂。
                    但Ian Curtis与Steve Brotherdale却留了下来并很快找到了新的鼓手：Steve Morris ，就这样组成了Joy Division的正式班子：Ian Curtis，Peter Hook，Bernard Summer和Steve Brotherdale…… 1977年12月，他们决定录制4首新歌，这就是后来的"An Ideal For Living"当时他们仍以Warsaw作队名，结果发现这个名字与别人有冲突，于是在1978年1月正式更名为"Joy Division"并在1月28 日这天在曼彻斯特的Pip酒吧举行了正式演出。
                    乐队的经济人也换成了Rob Gretton。
                    同年曼彻斯特一家俱乐部老板Tony Wilson和Alan Erasmus注册了The Factory这个唱片品牌，并在10月签下了Joy Division。
                    渐渐的Joy Division的名气越来越大，但主唱Ian的癫痫病却成了乐队以后发展的一大阴影。那个时候他与妻子Deborah快有了自己的孩子，乐队的首张专辑也在制作中，但他却变得越来越孤僻，拒绝与外界沟通。
                    在1979年4月14日，乐队出现在了英国国家电台上，他们很快就被公众所熟悉。
                    3月4日他们又在The Cure的演出中暖场。6月Joy Division的第一张专辑"Unknown Pleasures"正式发行，评论反映良好，卖的也还不错，到1982年6 月为止共卖了10万张。
                    这是一张前所未有的低调作品：冷漠，暗淡且沉重，Ian Curtis深沉的嗓音在由简练的吉他布景中缓缓的唱着献给残酷青春的挽歌。其中的"She's Lost Control"被认为是"最让人震撼的作品"。
                    这些成功让他们整个夏天和秋季都在伦敦的酒吧里演出。9月13日Factory公司在伦敦的斯加拉剧场举行了一个称为"FAC9"的现场聆听会。15日Joy Division第一次在BBC 电视二台举行了大型现场表演，Ian Curtis在 "Transmission" 和 "She's Lost Control" 中以令人着迷的机器人舞步给观众留下了深刻的印象。
                    这之后Ian Curtis的癫痫病越来越发作频繁，乐队只能断断续续的录制一些作品。其间诞生了Joy Division的另一首经典歌曲：Love Will Tear Us Apart。第二张专辑"Closer"也同样是一张叫人想自杀的作品。专辑中处处可见Ian Curtis那颗黑色的心灵的伤痕。从一开始的"Atrocity Exhibition"到结束的"Decades"都是如此，更不用说著名的"Isolation"和"The Eternal"了。听过这张专辑后，你会发现现在的很多所谓XX的乐队都只不过是在玩"轻音乐"而已。那种渗透进灵魂中的莫名哀伤已让不少Ian Curtis的追随者变成了殉道者。
                    终于在这年5月18日Ian Curtis这个一直崇拜早逝的Jim Morrison的23岁年轻人完成了他人生的两大夙愿：成名和自杀中还剩下的那一个--自杀。接下来的一个月，"Closer"爬上了BBC 专辑榜的前十，"Love Will Tear Us Apart"成了单曲榜10佳。
                    <br>
                    乐队评价：这又是一出摇滚史上的悲剧，但只要摇滚还在，它就会继续压榨着每一个艺人的每一条神经，直到吸干他们每一滴血。坚持下来的人成为了英雄，中途退缩的已没人会记得他的名字，而那些因为种种不幸未走完他们的路的人则成为了--永久的传奇！
                </p>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import SongList from '../components/SongList.vue'
export default {
    data(){
        return {
            activeItem:"songList"
        }
    },
    components:{
        SongList
    }
}
</script>

<style>

</style>