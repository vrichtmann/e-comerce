import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'

import {
    auth,
    signInWithGooglePopup,
    // signInWithGoogleRedirect,
    createUserDocumentFromAuth 
    } from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../compoments/sign-up-form/sign-up-form.component';

const Authentication = () => {

    // useEffect(() => {
    //     async function fetchData(){
    //         const response = await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user)
    //         }
    //     }
    //     fetchData();
    // }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocREf = await createUserDocumentFromAuth(user);
    };

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
        </div>
    );
}

export default Authentication;