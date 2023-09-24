import { createApp } from 'vue'
import './assets/main.css'
import router from './router'
import App from './App.vue'

import { auth } from './firebase/config.js'

let app

auth.onAuthStateChanged(() => {
    if(!app){

    app = createApp(App)
      .use(router)
      .mount('#app')

    }

})

