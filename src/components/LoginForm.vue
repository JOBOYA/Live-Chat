<template>
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Email" required v-model="email">
      <input type="password" placeholder="Mot de passe" required v-model="password">
      <div class="error">{{ error }}</div>
      <button type="submit">Connexion</button>
    </form>
  </template>
  
  <script>
      import { ref } from 'vue';
      import useLogin from '../composables/useLogin';
  
      export default {
          setup() {
              
              const email = ref('');
              const password = ref('');

              const { error, login } = useLogin();
              
              const handleSubmit = async () => {
                 await login( email.value, password.value);
                 if (!error.value) {
                    console.log('user logged in');
                 }
          }
          return { email, password, handleSubmit, error }
  
      }
  }
  </script>