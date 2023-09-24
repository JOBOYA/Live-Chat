import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue' 
import LiveChatRoom from '../views/LiveChatRoom.vue' 
import  { auth } from '../firebase/config.js'

//auth guard
const requireAuth = (to, from, next) => {
 let user = auth.currentUser
 console.log('current user in auth guard: ', user)
  if(!user){
    next({name: 'WelcomePage'})
} else{
    next()
}
}

const routes = [
    {
      path: '/',
      name: 'WelcomePage', 
      components:  {default: WelcomePage}
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