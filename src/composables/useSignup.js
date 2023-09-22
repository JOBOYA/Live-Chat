// Imports
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase/config';

// Composable
const useSignup = () => {
    const auth = getAuth(app);
    const error = ref(null);
    const user = ref(null);

    const signup = async (email, password, displayName) => {
        error.value = null;

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            if (!res) {
                throw new Error('Could not complete the signup');
            }
            await res.user.updateProfile({ displayName });
            user.value = res.user;
        } catch (err) {
            console.log(err.message);
            error.value = err.message;
        }
    };

    return { error, signup, user };
};

export default useSignup;
