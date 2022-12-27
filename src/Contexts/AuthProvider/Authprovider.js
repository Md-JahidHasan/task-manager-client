import React from 'react';
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import app from "../../firebase/firebase.config";
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

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
        return updateProfile(auth.currentUser, userInfo)
    }

    const authInfo = {
        createUser,
        updateUserProfile,
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