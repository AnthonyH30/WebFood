import { createContext, useEffect, useState } from "react";
import { AuthProps } from "../Types/AuthContextType";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../Services/firebaseConfig";
import { User, UserCredential } from "@firebase/auth";


const initialValue= {
    email: '',
    setEmail: () => {},
    password: '',
    setPassword: () => {},
    handleSignUp: () => {},
    loading: false,
    handleSignIn: () => {},
    userCredentials: {} as any,
    setUserCredentials: () => {},
}

type AuthContextType ={
    email: string;
    setEmail: (newState: string) => void;
    password: string;
    setPassword: (newState: string) => void;
    handleSignUp: (e:React.SyntheticEvent) => void;
    loading: boolean;
    handleSignIn: (e:React.SyntheticEvent) => void;
    userCredentials: UserCredential;
    setUserCredentials: (newState: UserCredential) => void;
}

export const AuthContext = createContext<AuthContextType>(initialValue);

export default function AuthProvider({children}: AuthProps){

    const [email, setEmail] = useState(initialValue.email);
    const [password, setPassword] = useState(initialValue.password);
    const [userCredentials, setUserCredentials] = useState(initialValue.userCredentials)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [
        signInWithEmailAndPassword,
        userr,
        loadingg,
        errorr,
      ] = useSignInWithEmailAndPassword(auth);

      const handleSignUp = (e:React.SyntheticEvent) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
        setEmail('');
        setPassword('');
        alert("Conta criada!")
        setUserCredentials(user)
      }

      useEffect(() => {
        console.log(userCredentials.user);
      },[userCredentials])

      const handleSignIn = (e:React.SyntheticEvent) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
        setEmail('');
        setPassword('');
      }

    return(
        <AuthContext.Provider value={{ email, setEmail, password, setPassword, handleSignUp, loading, handleSignIn, userCredentials, setUserCredentials}}>
            {children}
        </AuthContext.Provider>
    )
}