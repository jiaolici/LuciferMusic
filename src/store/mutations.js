const { default: state } = require("./states")

const mutations = {
    login:function(state,user){
        state.loginUser = user// eslint-disable-line no-unused-vars
        console.log(state)
    }
}

export default mutations