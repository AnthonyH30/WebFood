import React, { memo, useContext } from "react";
import './styles.scss';
import Header from '../../Services/Header';
import Input from "../../Components/Input";
import Btn from "../../Components/Btn";
import { FoodContext } from "../../Context/FoodContext";
import Modal from "react-modal";

Modal.setAppElement('#root');

function Home(){

    const { search, setSearch, modalIsOpen, setModalIsOpen } = useContext(FoodContext);

    function closeModal(){
        setModalIsOpen(false);
    }
    
    function openModal(){
        setModalIsOpen(true);
    }

    return(
        <>
            <Header />
            <section className="box">
                <form className="box__Search">
                    <Input placeholder="Pesquisar" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <Btn>Pesquisar</Btn>
                </form>
                <Btn style={{position: 'absolute', top: '20px', right: '20px'}} onClick={openModal}>+ Adicionar</Btn>
            </section>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="modal__overlay"
                className="modal__content"
            >
                <h2>sla mano</h2>
            </Modal>
        </>
    )
}

export default memo(Home);