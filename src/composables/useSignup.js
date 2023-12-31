import { ref } from 'vue';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { projectAuth, projectFirestore } from '../firebase/config';
import { doc, setDoc } from "firebase/firestore";

const useSignup = () => {
    const db = projectFirestore
    const auth = projectAuth
    const error = ref(null);
    const user = ref(null);

    const signup = async (email, password, displayName) => {
        error.value = null;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;

            // Mise à jour du displayName dans l'objet utilisateur
            await updateProfile(userCredential.user, { displayName });
            await userCredential.user.reload();

            // Mise à jour du user ref
            user.value = userCredential.user;

            // Stocker des informations supplémentaires dans Firestore
            const userDoc = doc(db, 'users', uid);
            await setDoc(userDoc, { displayName });

        } catch (err) {
            console.log(err.message);
            if (err.code === 'auth/email-already-in-use') {
                error.value = "L'adresse e-mail est déjà utilisée par un autre compte.";
            } else if (err.code === 'auth/weak-password') {
                error.value = 'Le mot de passe doit comporter au moins 6 caractères.';
            } else {
                error.value = err.message;
            }
        }
    };

    return { error, signup };
};

export default useSignup;
