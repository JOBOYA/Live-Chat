import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue' // Importer le composant


const routes = [
    {
      path: '/',
      name: 'WelcomePage', // Renommer ici aussi
      components: { default: WelcomePage },
    }
  ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router