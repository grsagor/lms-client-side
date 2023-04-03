import React, {  createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const LogIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogIn=(provider)=>{
        return signInWithPopup(auth,provider);
     }

    const authInfo={createUser,LogIn,googleLogIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;