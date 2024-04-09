// import axios from "axios";

import axios from 'axios'
import { createStore } from 'vuex'
// import { ref } from "vue";
export default createStore({
    state(){
        return{
            token:'',
            animationData:{},
            mainPage:false
       }
    },
    mutations:{
        setTokenValue(state,token){
           return state.token = token
        },
        getAnimeContent(state,animeContent){
            console.log(animeContent,"tttttt");
            return state.animationData = animeContent
        },
        setMainPage(state,value){
            return state.mainPage = value
        }
    },
    actions:{
        async fetchAnimeData({commit,state}){
            await axios.get('https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent', { headers: {"Authorization" : `Bearer ${state.token}`} })
                        .then(response => (commit('getAnimeContent',response.data.content)))

            
        }

    }
})

