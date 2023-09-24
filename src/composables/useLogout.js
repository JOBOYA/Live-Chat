import { ref } from 'vue';
import { getAuth } from 'firebase/auth';

const error = ref(null);

const logout = async () => {
    error.value = null;
    
    try {
        const auth = getAuth();
        await auth.signOut();
    } catch (err) {
        console.log(err.message);
        error.value = err.message;
    }
    }

const useLogout = () => {
    return { logout, error }
}

export default useLogout;