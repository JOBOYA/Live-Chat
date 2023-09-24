import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue' 
import LiveChatRoom from '../views/LiveChatRoom.vue' 
import  {  projectAuth } from '../firebase/config.js'

//auth guard
const requireAuth = (to, from, next) => {
 let user =  projectAuth.currentUser
  if(!user){
    next({name: 'WelcomePage'})
} else{
    next()
}
}

const requireNoAuth = (to, from, next) => {
    let user =  projectAuth.currentUser
     if(user){
       next({name: 'LiveChatRoom'})
   } else{
       next()
   }
   }

const routes = [
    {
      path: '/',
      name: 'WelcomePage', 
      components:  {default: WelcomePage},
      beforeEnter: requireNoAuth
    },
    {
      path: '/liveChatRoom',
      name: 'LiveChatRoom',  
      components: {default: LiveChatRoom},
      beforeEnter: requireAuth
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;