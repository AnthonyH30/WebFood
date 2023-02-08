import React, { memo } from "react";
import './styles.scss';
import Header from '../../Services/Header';
import Input from "../../Components/Input";
import Btn from "../../Components/Btn";

function Home(){
    return(
        <>
            <Header />
            <section className="box">
                <form className="box__Search">
                    <Input placeholder="Pesquisar" />
                    <Btn>Pesquisar</Btn>
                </form>
                <Btn style={{position: 'absolute', top: '20px', right: '20px'}}>+ Adicionar</Btn>
            </section>
        </>
    )
}

export default memo(Home);