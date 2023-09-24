//useCoolection is a custom composable that will be used to fetch data from firestore
import { ref } from "vue";
import {  projectFirestore } from "../firebase/config";

const useCollection = (collection) => {
  const error = ref(null);

  // add new document
  const addDoc = async (doc) => {
    error.value = null;

    try {
      await  projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "could not send the message";
    }
  };

  return { error, addDoc };
};

export default useCollection;