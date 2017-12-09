import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        playArr:[
            'static/images/play1',
            'static/images/play2',
            'static/images/play3'
        ]
    },
    mutations:{
        
    }
})
export default store