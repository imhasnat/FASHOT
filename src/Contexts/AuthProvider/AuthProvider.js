import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updateData, setUpdateData] = useState(true);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserInfo = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }

    const popupLogin = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    if (loading) {
        return <progress className=" mx-auto flex my-48 justify-center progress progress-error w-56"></progress>
    }

    const value = {
        user,
        loading,
        theme,
        setUser,
        setTheme,
        createUser,
        setLoading,
        logIn,
        logOut,
        updateUserInfo,
        popupLogin,
        updateData,
        setUpdateData
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;