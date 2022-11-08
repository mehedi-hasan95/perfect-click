import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from '../Firebase/Firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create user with email
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login With Email 
    const loginUserWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Update user Name
    const updateName = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }





    

    const authInfo = {
        createUser, loginUserWithEmail, updateName
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer position="top-right" />
        </AuthContext.Provider>
    );
};

export default AuthProvider;