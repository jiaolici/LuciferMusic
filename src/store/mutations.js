const { default: state } = require("./states")

const mutations = {
    login:function(state,user){
        state.loginUser = user// eslint-disable-line no-unused-vars
    },
    logout:function(state){
        state.loginUser = null// eslint-disable-line no-unused-vars
    }
}

export default mutations