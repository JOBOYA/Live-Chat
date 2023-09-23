import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase/config';

const error = ref(null);
const displayName = ref(null);

const login = async (email, password) => {
    error.value = null;
    try {
        const auth = getAuth(app);
        const res = await signInWithEmailAndPassword(auth, email, password);
        displayName.value = res.user.displayName;  // Mettre à jour le displayName
        error.value = null;
        console.log(res);
        return res;
    } catch (err) {
        console.log(err.message);
        if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-login-credentials') {
            error.value = 'Identifiants incorrects';
        } else {
            error.value = err.message;
        }
    }
};

const useLogin = () => {
    return { error, login , displayName };
};

export default useLogin;
