import { createContext, useEffect, useState } from "react";
import { AuthProps } from "../Types/AuthContextType";
import { UserCredential } from "@firebase/auth";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Services/firebaseConfig";
import { Navigate, useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

const initialValue= {
    userCredentials: {} as any,
    setUserCredentials: () => {},
    SignIn: () => {},
    signed: false,
    setSigned: () => {},
    SignOut: () => {},
}

type AuthContextType ={
    userCredentials: UserCredential;
    setUserCredentials: (newState: UserCredential) => void;
    SignIn: () => void;
    signed: boolean;
    setSigned: (newState: boolean) => void;
    SignOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(initialValue);

export default function AuthProvider({children}: AuthProps){
    
    const auth = getAuth(app);
    
    const [userCredentials, setUserCredentials] = useState(initialValue.userCredentials);
    const [signed, setSigned] = useState(initialValue.signed)
    
    
    const SignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            setUserCredentials(user);
            sessionStorage.setItem("@AuthFirebase:Token", JSON.stringify(token));
            sessionStorage.setItem("@AuthFirebase:User", JSON.stringify(user));
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    const SignOut = () =>{
        signOut(auth).then(() => {
            setUserCredentials(null);
            sessionStorage.clear()
          }).catch((error) => {
            // An error happened.
          });
    }
    useEffect(() => {
        const LoadStorageAuth = () =>{
            const sessionUser = sessionStorage.getItem("@AuthFirebase:User");
            const sessionToken = sessionStorage.getItem("@AuthFirebase:Token");
            
            if(sessionToken !== null && sessionUser !== null){
                setUserCredentials(sessionUser);
            } else{
                setSigned(false);
            };
        };
        LoadStorageAuth();
    },[])
    
    useEffect(() =>{
        userCredentials.length > 0 && setSigned(true);
    },[userCredentials])
    
    return(
        <AuthContext.Provider value={{  userCredentials, setUserCredentials, SignIn, signed, setSigned, SignOut }}>
            {children}
        </AuthContext.Provider>
    )
}