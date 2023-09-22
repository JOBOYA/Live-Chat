<template>
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Email" required v-model="email">
      <input type="password" placeholder="Mot de passe" required v-model="password">
      <button type="submit">Connexion</button>
    </form>
  </template>
  
  <script>
      import { ref } from 'vue';
  
      export default {
          setup() {
              
              const email = ref('');
              const password = ref('');
              
              const handleSubmit = () => {
                 console.log(email.value, password.value)
          }
          return { email, password, handleSubmit }
  
      }
  }
  </script>