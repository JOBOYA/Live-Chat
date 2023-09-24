<template>
  <div class="welcome container">

    <p>Bienvenue</p>
  <div v-if="showLogin">
    <p>Connectez-vous</p>
  <LoginForm @login="enterChat"/>
  <p>Pas de compte?<span @click="showLogin = false ">Inscrivez-vous</span></p>
  </div>
<div v-else>
  <p>Inscrivez-vous</p>
  <SignupForm @signup="enterChat"/>
  <p>Vous avez déjà un compte?<span @click="showLogin = true ">Connectez-vous</span></p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from '../components/LoginForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


export default {
  name: 'WelcomePage',
  components: {SignupForm, LoginForm},
  setup(){
    const showLogin = ref(true);
    const router = useRouter();
    const enterChat = () => {
  router.push({name: 'LiveChatRoom'})
}



    return {showLogin , enterChat}
  }
}

</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
    font-size: 1.2rem;
    font-weight: 300;
    
}

.welcome form {
  max-width: 300px;
    margin: 20px auto;
}

.welcome label {
    display: block;
    margin-bottom: 20px 0 10px;
}

.welcome span {
  font-weight:  bold;
  cursor: pointer;
  text-decoration: underline;
}



.welcome input {
  box-sizing: border-box;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #eee;
    border-radius: 20px;
    outline: none;
    color: #999;
    margin: 10px auto;
}


</style>