import { ref } from 'vue';
import { getAuth} from 'firebase/auth';


const user = ref(getAuth().currentUser);

getAuth().onAuthStateChanged(_user => {
    console.log('User state change. Current user is:', _user);
    user.value = _user;
});

const getUser = () => {
    return { user }
}

export default getUser;