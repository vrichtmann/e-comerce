import { createContext, useState, useEffect, useReducer } from 'react'
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createAction } from '../utils/reducer/reducer.utils';

// as the actual value you want to acess
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});


// export const USER_ACTION_TYPES = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER'
// }

// const userReducer = (state, action) =>{
//     console.log('dispatched');
//     console.log(action);
//     const {type, payload} = action;

//     switch(type) {
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return{
//                 ...state,
//                 currentUser: payload
//             }
//         default:
//             throw new Error(`Unhandled type ${type} in userReducer`)
//     }

//     return {
//         currentUser: payload
//     }
// }

// const INITIAL_STATE ={
//     currentUser:null
// }

export const UserProvider = ({children}) =>{

    const [ {currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
    console.log(currentUser);

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }

    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubcribe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
    
        return unsubcribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

/*
    const userReducer = (state, action) =>{
        reuturn{
            currentUser: {null}
        }
    }

*/