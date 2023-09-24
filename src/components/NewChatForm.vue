<template>
  <form>
    <textarea placeholder="Tapez un message et appuyez sur Entrée pour envoyer..."
    v-model="message"
    @keypress.enter.prevent="handleSubmit"
    ></textarea>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'

export default {
    setup() {
        const { user } = getUser()  // Utilisation de la déstructuration pour obtenir user directement
        const message = ref('')

        const handleSubmit = async () => {
    console.log("user.value:", user.value); // Pour vérifier ce que contient user.value
    const displayName = user.value ? user.value.displayName : 'Inconnu';
    const chat = {
        name: displayName,
        message: message.value,
        createdAt: timestamp()
    }
    console.log("chat:", chat); // Pour voir l'objet chat complet
    message.value = '';
}

        
        return { message, handleSubmit }
    }
}
</script>


<style scoped>
form{
  margin: 10px;
}

textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}


</style>