import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'

import {
    auth,
    signInWithGooglePopup,
    // signInWithGoogleRedirect,
    createUserDocumentFromAuth 
    } from '../../utils/firebase/firebase.utils'

import SignInForm from '../../compoments/sign-in-form/sign-in-form.component';
import SignUpForm from '../../compoments/sign-up-form/sign-up-form.component';

import "./authentication.styles.scss"

const Authentication = () => {
    return(
        <div className='authentication-container'>
            <SignInForm/>           
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
        </div>
    );
}

export default Authentication;