const state = {
    loginUser:{},
    player:{
        playingList:[],
        playingSong:null,
        isPlaying:false
    },
    globalSetting:{
        areas:[
            {
                id:1,
                name:"四川",
                cities:[
                    {name:"成都"},
                    {name:"泸州"},
                ]
            },
            {
                id:2,
                name:"湖北",
                cities:[
                    {name:"武汉"},
                    {name:"襄阳"},
                ]
            },
        ]
    }
}

export default state