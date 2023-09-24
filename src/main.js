import { createApp } from 'vue'
import './assets/main.css'
import router from './router'
import App from './App.vue'

import {  projectAuth } from './firebase/config.js'

let app

 projectAuth.onAuthStateChanged(() => {
    if(!app){

    app = createApp(App)
      .use(router)
      .mount('#app')

    }

})

