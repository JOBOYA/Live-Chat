<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Nom d'utilisateur" required v-model="displayName">
    <input type="email" placeholder="Email" required v-model="email">
    <input type="password" placeholder="Mot de passe" required v-model="password">
    <div class="error">{{ error }}</div>
    <button type="submit">S'inscrire</button>
    
  </form>
</template>

<script>
    import { ref } from 'vue';
    import useSignup from '../composables/useSignup';

    export default {
        setup(props, context) {
          const { error, signup } = useSignup();

          //ref
            const displayName = ref('');
            const email = ref('');
            const password = ref('');
            
            const handleSubmit = async () => {
             await signup( email.value, password.value, displayName.value);
             if (!error.value) {
                      context.emit('signup');
                 }
        }
        return { displayName, email, password, handleSubmit, error }

    }
}
</script>