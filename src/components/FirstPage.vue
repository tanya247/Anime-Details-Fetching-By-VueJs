<template>
    <p class="todayDate">{{ formatData() }}</p>
    <h1>Today</h1>
    <div class="mainContainer">
        <button @click="mainPageEnter" class="thumbnailImage" >
            <img class="thumbnail" :src="$store.state.animationData.thumbNailImage"/>

        </button>
        <LogoContainer/>
      
    </div>
    
</template>
<script>
import LogoContainer from './LogoContainer'
export default {
    name:"FirstPage",
    components:{
        LogoContainer,
    },
    methods:{
        formatData(){
            var options = {  weekday: 'long',  month: 'long', day: 'numeric' };
            var requiredFormat = new Date().toLocaleTimeString('en-us', options).split("at")[0];
            return requiredFormat.replace(',','')

        },
        mainPageEnter(){
            this.$store.commit('setMainPage',true)
        },
       
    },
    // mounted(){
    //     this.$store.dispatch('fetchAnimeData')
    // }
}
</script>
<style>
    .todayDate{
        color: grey;
        font-size: 18px;
        font-weight: 700;
        margin: 0;
        margin-left:5px;
    }
    h1{
        font-size: 28px;
        font-weight: 700;
        margin: 5px;
    }
    .mainContainer{
        border-radius:12px;
        height:90%;
        width:100%;
        background: #fff;
        border:1px solid #fff;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
    .thumbnailImage{
        border: none;
        height: 80%;
        width: 100%;
        position: relative;
        z-index: 12;
    }
    .thumbnail{
        height:100%;
        border-radius:12px;
        width:100%;
        background-size: contain;
        background-repeat: no-repeat;
        object-fit: contain;
    }

    
</style>