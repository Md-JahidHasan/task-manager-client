import React from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from "../../firebase/firebase.config";
import { useState, useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (userInfo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo)
    }

    const providerLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
        
    }

    const logOut = ()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=> {
            return unSubscribe()
        }
    }, [])

    const authInfo = {
        createUser,
        updateUserProfile,
        logInUser,
        providerLogin,
        logOut,
        loading,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;