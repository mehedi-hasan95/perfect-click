import React, { createContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer position="top-right" />
        </AuthContext.Provider>
    );
};

export default AuthProvider;