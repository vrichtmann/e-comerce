import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { getAuth, 
         signInWithRedirect, 
         signInWithPopup, 
         GoogleAuthProvider,
         createUserWithEmailAndPassword,
         signOut,
         onAuthStateChanged,
        signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

 
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
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>{
    if(!userAuth)return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        }catch(error){
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => 
    onAuthStateChanged(auth, callback);



// {
//     next: callback,
//     error: errorCallback
//     complete: completeCallback
// }