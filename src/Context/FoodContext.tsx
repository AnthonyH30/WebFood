import { createContext, useState } from "react";
import { FoodContextProps } from "../Types/FoodContextType";

const initialValue = {
    search: "",
    setSearch: () => {},
    modalIsOpen: false,
    setModalIsOpen: () => {},
}

type FoodContextType ={
    search: string;
    setSearch: (newState: string) => void;
    modalIsOpen: boolean;
    setModalIsOpen: (newState: boolean) => void;
}

export const FoodContext = createContext<FoodContextType>(initialValue);

export default function FoodContextProvider({children}: FoodContextProps){

    const [search, setSearch] = useState(initialValue.search);
    const [modalIsOpen, setModalIsOpen] = useState(initialValue.modalIsOpen);

    return(
        <FoodContext.Provider value={{search, setSearch, modalIsOpen, setModalIsOpen}}>
            {children}
        </FoodContext.Provider>
    )
}