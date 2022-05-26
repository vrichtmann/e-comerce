import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
 
const firebaseConfig = {
    apiKey: "AIzaSyCN8z0L_DKnOn7-5evb3aVIKL9KlP951wE",
    authDomain: "crwn-clothing-db-96708.firebaseapp.com",
    projectId: "crwn-clothing-db-96708",
    storageBucket: "crwn-clothing-db-96708.appspot.com",
    messagingSenderId: "994804035874",
    appId: "1:994804035874:web:646ed2157bfbcd7611f57b"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)