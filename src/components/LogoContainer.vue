<template>
    <div class = "logo-wrapper">
        <div class="logoContainer">
            <img class="logo" :src="$store.state.animationData.logo"/>
            <div class="titleContainer">
                <p class="titleValue">{{$store.state.animationData.title}}</p>
                <p class="subTitleValue">{{$store.state.animationData.subTitle}}</p>
            </div>
        </div>
        <button class = "refreshVal" @click = "refershPage"> Refresh</button>
    </div>
</template>

<script>

    export default{
        name:"LogoContainer",
        methods:{
            refershPage(){
                
                this.$store.dispatch('fetchAnimeData')
                this.$store.commit('setMainPage',false)
                
            }
        }
    }
</script>
<style>
    .logo-wrapper{
        height:18%;
        width:95%;
        display: flex;
        margin:auto;
        align-items: center;
        justify-content: space-between;
    }
    .logoContainer{
        height: 100%;
        width:auto;
        display: flex;
        align-items: center;
        column-gap: 10px;
    }
    .logo{
        height:100%;
        width:auto;
        border-radius: 12px;
        background-size: contain;
        background-repeat: no-repeat;
        object-fit: contain;
    }
    .refreshVal{
        padding: 10px;
        color: blue;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 17px;
        border-radius: 38px;
        border: 1px solid transparent;
    }
    .titleValue{
        margin: 0;
        font-size: 25px;
        font-weight: 700;
    }
    .subTitleValue{
        margin: 0;
        font-size: 18px;
        font-weight: 200;
    }
</style>