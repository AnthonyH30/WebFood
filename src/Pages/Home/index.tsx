import React, { memo, useContext } from "react";
import './styles.scss';
import Header from '../../Services/Header';
import Input from "../../Components/Input";
import Btn from "../../Components/Btn";
import { FoodContext } from "../../Context/FoodContext";
import Modal from "react-modal";
import ProductCard from "../../Components/ProductCard";

Modal.setAppElement('#root');

function Home(){

    const { search, setSearch, modalIsOpen, setModalIsOpen, image, setImage, productName, setProductName, description, setDescription, handleSubmit, products, handleDelete, handleEdit} = useContext(FoodContext);

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
            <section className="products">
                {products.length ? null : <p>Nenhum item encontrado.</p>}
                {products.map((product) => <ProductCard image={product.image} title={product.productName} description={product.description} key={product.id} onclick={() => handleDelete(product.id)} onclickEdit={() => handleEdit(product)} />)}
            </section>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="modal__overlay"
                className="modal__content"
            >
                <form className="modal__form" onSubmit={handleSubmit}>
                    <h2 className="modal__form--title">Adicione um Produto</h2>
                    <label title="Url da Imagem (preferência 320px largura e 230px altura)" htmlFor="image">Url da Imagem</label>
                    <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Url da Imagem" id="image" style={{backgroundColor: "#eaeaea", width: "100%", borderRadius: "5px"}} />
                    <label title="Nome do Produto" htmlFor="name">Nome do Produto</label>
                    <Input value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Nome do Produto" id="name" style={{backgroundColor: "#eaeaea", width: "100%", borderRadius: "5px"}} />
                    <label title="Descrição" htmlFor="description">Descrição</label>
                    <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" id="description" style={{backgroundColor: "#eaeaea", width: "100%", borderRadius: "5px"}} />
                    <Btn style={{marginTop: '30px'}}>Adicionar</Btn>
                </form>
            </Modal>
        </>
    )
}

export default memo(Home);