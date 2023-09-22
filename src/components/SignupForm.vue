<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Nom d'utilisateur" required v-model="displayName">
    <input type="email" placeholder="Email" required v-model="email">
    <input type="password" placeholder="Mot de passe" required v-model="password">
    <button type="submit">S'inscrire</button>
    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script>
    import { ref } from 'vue';
    import useSignup from '../composables/useSignup';

    export default {
        setup() {
          const { signup } = useSignup();

          //ref
            const displayName = ref('');
            const email = ref('');
            const password = ref('');
            
            const handleSubmit = async () => {
             await signup( email.value, password.value, displayName.value);
             console.log('user signed up');
        }
        return { displayName, email, password, handleSubmit }

    }
}
</script>