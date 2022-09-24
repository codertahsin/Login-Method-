import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCB1U8IKH8DwskUF3PYLLT3y49qHKrTs6U",
    authDomain: "login-method-30cde.firebaseapp.com",
    projectId: "login-method-30cde",
    storageBucket: "login-method-30cde.appspot.com",
    messagingSenderId: "1056994021533",
    appId: "1:1056994021533:web:fc0678b4ea611202fbc474"
  };
  

  // Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app)
export const Provider = new GoogleAuthProvider();

export const SignInWIthGoogle = () => {
    signInWithPopup(auth, Provider).then((result)=>{
        const profilePic = result.user.photoURL;
        const name = result.user.displayName;
        const email = result.user.email;
        localStorage.getItem('profilePic', profilePic)
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
    }).catch(error=>console.log(error))
}
