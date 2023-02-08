import React, { memo } from "react";
import './styles.scss';
import Header from '../../Services/Header';
import Input from "../../Components/Input";
import Btn from "../../Components/Btn";

function Home(){
    return(
        <>
            <Header />
            <form className="Search">
                <Input placeholder="Pesquisar" />
                <Btn>Pesquisar</Btn>
            </form>
        </>
    )
}

export default memo(Home);