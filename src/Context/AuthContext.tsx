import { createContext, useState } from "react";
import { AuthProps } from "../Types/AuthContextType";



const initialValue= {
    auth: true,
    setAuth: () => {},
    name: '',
    setName: () => {},
    email: '',
    setEmail: () => {},
    password: '',
    setPassword: () => {},
}

type AuthContextType ={
    auth: boolean;
    setAuth: (newState: boolean) => void;
    name: string;
    setName: (newState: string) => void;
    email: string;
    setEmail: (newState: string) => void;
    password: string;
    setPassword: (newState: string) => void;
}

export const AuthContext = createContext<AuthContextType>(initialValue);

export default function AuthProvider({children}: AuthProps){

    const [auth, setAuth] = useState(initialValue.auth);
    const [name, setName] = useState(initialValue.name);
    const [email, setEmail] = useState(initialValue.email);
    const [password, setPassword] = useState(initialValue.password);

    return(
        <AuthContext.Provider value={{auth, setAuth, name, setName, email, setEmail, password, setPassword}}>
            {children}
        </AuthContext.Provider>
    )
}