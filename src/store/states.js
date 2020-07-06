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
                value:"四川省",
                label:"四川省",
                children:[
                    {value:"成都市",label:"成都市"},
                    {value:"达州市",label:"达州市"},
                ]
            },
            {
                value:"湖北省",
                label:"湖北省",
                children:[
                    {value:"武汉市",label:"武汉市"},
                    {value:"襄阳市",label:"襄阳市"},
                ]
            },
        ]
    }
}

export default state