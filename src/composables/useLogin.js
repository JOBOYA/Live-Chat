import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';  // Importer signInWithEmailAndPassword
import { app } from '../firebase/config';

const error = ref(null);

const login = async (email, password) => {
    
    error.value = null;

    try {
        const auth = getAuth(app);
        const res = await signInWithEmailAndPassword(auth, email, password);  // Utiliser signInWithEmailAndPassword
        error.value = null;
        console.log(res);
        return res;
    } catch (err) {
        console.log(err.message);  // Utiliser err.message au lieu de err.value
        if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
            error.value = 'Identifiants incorrects';
        } else {
            error.value = err.message;
        }
    }
};

const useLogin = () => {
    return { error, login };
};

export default useLogin;
