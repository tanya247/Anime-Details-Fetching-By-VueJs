<template>
<div class="mainPageContent" v-if="$store.state.mainPage">
  <button class="closeButton" @click="closeMainPage">X</button>
  <MainPage/>
</div>
<div class="thumbnailPageContent" v-else>
  <FirstPage ></FirstPage>
</div>
  
</template>

<script>
import FirstPage from './components/FirstPage.vue'
import MainPage from './components/MainPage.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    FirstPage,
    MainPage
  },
  methods:{
    closeMainPage(){
      this.$store.commit('setMainPage',false)
    }
  },

  beforeCreate(){
    let postUrl = "https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken";
    let myemail = {email:"tanyakansal238@gmail.com" }
    axios.post(postUrl,myemail)
         .then(response=>(this.$store.commit('setTokenValue',response.data.token)))
    setTimeout(() => {
      if(this.$store.state.token){
        this.$store.dispatch('fetchAnimeData')
      }
    }, 500);
    
   
    
  },


 

}
</script>

<style>
#app {
  padding: 10px;
  
}
.mainPageContent{
  height: 100vh;
}
.thumbnailPageContent{
  height: 94vh;
  
}
.closeButton{
  position: fixed;
  border-radius: 50%;
  padding: 15px;
  right: 15px;
  border: none;
  font-size: 12px;
}
</style>
