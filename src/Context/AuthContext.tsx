import { createContext, useEffect, useState } from "react";
import { AuthProps } from "../Types/AuthContextType";
import { UserCredential } from "@firebase/auth";


const initialValue= {
    userCredentials: {} as any,
    setUserCredentials: () => {},
}

type AuthContextType ={
    userCredentials: UserCredential;
    setUserCredentials: (newState: UserCredential) => void;
}

export const AuthContext = createContext<AuthContextType>(initialValue);

export default function AuthProvider({children}: AuthProps){

    const [userCredentials, setUserCredentials] = useState(initialValue.userCredentials)

    return(
        <AuthContext.Provider value={{  userCredentials, setUserCredentials}}>
            {children}
        </AuthContext.Provider>
    )
}