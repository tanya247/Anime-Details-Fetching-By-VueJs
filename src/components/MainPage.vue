<template>
    <div class="mainImage">
        <div class="mainImage-wrapper">
            <img class="imageMain" :src="$store.state.animationData.mainImage"/>
         </div>
        <LogoContainer/>
      
    </div>
    <div class="allDetails" v-html="$store.state.animationData.text"></div>
    <div class="anotherLogo">
        <LogoContainer/>
    </div>
    <div class="emptySpace">
        
    </div>
</template>
<script>
    import LogoContainer from './LogoContainer'
    export default {
        name:"MainPage",
        components:{
            LogoContainer,
        },
       
    }
</script>
<style>
    .allDetails{
        font-size: 18px;
        font-weight: 500;
        line-height: 1.5;
    }
    .mainImage{
        height:600px;
        width:100%;
    }
    .mainImage-wrapper{
        height: 80%;
        width: 100%;
    }
    .imageMain{
        height: 95%;
        width: 100%;
        object-fit: contain;
    }
    .anotherLogo{
        height:300px;
        width:97%;
        background-color: lightgray;
        padding: 20px;
    }
    .anotherLogo .logo-wrapper{
        flex-direction: column;
        height: 100%;
        
    }
    .anotherLogo .logoContainer{
        height:65%;
        flex-direction: column;
        text-align: center;
        row-gap:10px;
    }
    .anotherLogo .logo{
        height:90%
    }
    .emptySpace{
        height:20px;
    }
</style>