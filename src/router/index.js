import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue' 
import LiveChatRoom from '../views/LiveChatRoom.vue'  // Renommé ici

const routes = [
    {
      path: '/',
      name: 'WelcomePage', 
      components: { default: WelcomePage },
    },
    {
      path: '/chatRoom',
      name: 'LiveChatRoom',  
      components: { default: LiveChatRoom },
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;