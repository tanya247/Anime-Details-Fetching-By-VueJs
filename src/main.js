import { createApp } from 'vue'
import store from './store/store'
import App from './App.vue'
// import axios from 'axios';

// const axios = require(axios)
// console.log(animeStore.state.token,"oooooooo");
const app = createApp(App)
app.use(store)
app.mount('#app')
