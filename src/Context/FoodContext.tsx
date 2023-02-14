import { createContext, useEffect, useState } from "react";
import { FoodContextProps } from "../Types/FoodContextType";
import { Product } from "../Types/ProductType";

const initialValue = {
    search: "",
    setSearch: () => {},
    modalIsOpen: false,
    setModalIsOpen: () => {},
    data: [] as any,
    setData: () => {},
    products: [] as any,
    setProducts: () => {},
    image: "",
    setImage: () => {},
    productName: "",
    setProductName: () => {},
    description: "",
    setDescription: () => {},
    handleSubmit: () => {},
    handleDelete: () => {}
}

type FoodContextType ={
    search: string;
    setSearch: (newState: string) => void;
    modalIsOpen: boolean;
    setModalIsOpen: (newState: boolean) => void;
    data: Product[];
    setData: (newState: Product[]) => void;
    products: Product[];
    setProducts: (newState: Product[]) => void;
    image: string;
    setImage: (newState: string) => void;
    productName: string;
    setProductName: (newState: string) => void;
    description: string;
    setDescription: (newState: string) => void;
    handleSubmit: (e:React.SyntheticEvent) => void;
    handleDelete: (e: number) => void;
}

export const FoodContext = createContext<FoodContextType>(initialValue);

export default function FoodContextProvider({children}: FoodContextProps){

    const [search, setSearch] = useState(initialValue.search);
    const [modalIsOpen, setModalIsOpen] = useState(initialValue.modalIsOpen);
    const [data, setData] = useState(initialValue.data);
    const [products, setProducts] = useState(initialValue.products);
    const [image, setImage] = useState(initialValue.image);
    const [productName, setProductName] = useState(initialValue.productName);
    const [description, setDescription] = useState(initialValue.description);

    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        if(description !== "" && !description.match(/^[ \t]+$/) && image !== "" && !image.match(/^[ \t]+$/) && productName !== "" && !productName.match(/^[ \t]+$/)){
            const newProduct = {
                id: Date.now(),
                image: image,
                productName: productName,
                description: description,
            }
            setData([...data, newProduct]);
            setProducts(data);
            setImage("");
            setProductName("");
            setDescription("");
            setModalIsOpen(false);
        }else{
            alert("Todos os campos são obrigatórios!")
        }
    }

    const handleDelete = (id: number) =>{
        const filteredProducts = data.filter((product: Product) => product.id !== id)
        setData(filteredProducts);
    }

    useEffect(() => {
        setProducts(data);
    },[data])

    return(
        <FoodContext.Provider value={{search, setSearch, modalIsOpen, setModalIsOpen, data, setData, products, setProducts, image, setImage, productName, setProductName, description, setDescription, handleSubmit, handleDelete}}>
            {children}
        </FoodContext.Provider>
    )
}