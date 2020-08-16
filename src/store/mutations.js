const { default: state } = require("./states")

const mutations = {
    login:function(state,user){
        state.loginUser = user// eslint-disable-line no-unused-vars
    },
    logout:function(state){
        state.loginUser = null// eslint-disable-line no-unused-vars
    },
    playSong:function(state,player){
        state.player.playingSong = player.index
        state.player.playingList = player.songList
        state.player.isPlaying = true
    },
    nextSong:function(state){
        if(!state.player.playingList){
            return
        }
        if(state.player.playingSong == state.player.playingList.length-1){
            state.player.playingSong = 0
        }
        else{
            state.player.playingSong++
        }
    },
    preSong:function(state){
        if(!state.player.playingList){
            return
        }
        if(state.player.playingSong == 0){
            state.player.playingSong = state.player.playingList.length-1
        }
        else{
            state.player.playingSong--
        }
    }
}

export default mutations