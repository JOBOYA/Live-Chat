<template>
 <div class="container">
<NavBar/>
<NewChatForm/>
 </div>
</template>

<script>

//get the current user using the getUser composable
// watch the current user for changes
//redirect the user to the welcome page when they logged out
import NewChatForm from '../components/NewChatForm.vue'
import NavBar from '../components/NavbarChat.vue'
import getUser  from '../composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { NavBar, NewChatForm },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'WelcomePage' })
      }
    })
  }
}
</script>

<style>

</style>