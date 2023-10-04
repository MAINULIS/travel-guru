import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


 export const AuthContext = createContext(null);

 const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 1. create user
    const createUser = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }
    // 2. login
    const login = (email, password) =>{
       setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }
    // 3. logOUt
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    // 4.  observe auth state change
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser); 
            setLoading(false);
        })
         return ()=>{
            unsubscribe();
         }
    },[])

  

    const info ={
        user,
        loading,
        createUser,
        login,
        logOut,
    }
    return (
        <AuthContext.Provider value={info}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;