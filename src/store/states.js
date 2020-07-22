const state = {
    loginUser:null,
    player:{
        playingList:[],
        playingSong:null,
        isPlaying:false
    },
    globalSetting:{
        areas:[
            {
                value:"四川",
                label:"四川",
                children:[
                    {value:"成都",label:"成都"},
                    {value:"达州",label:"达州"},
                ]
            },
            {
                value:"湖北",
                label:"湖北",
                children:[
                    {value:"武汉",label:"武汉"},
                    {value:"襄阳",label:"襄阳"},
                ]
            },
        ]
    }
}

export default state