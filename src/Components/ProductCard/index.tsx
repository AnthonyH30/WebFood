import React from 'react';
import { ProductCardType } from '../../Types/ProductCardType';
import './styles.scss';
import { BsPencilSquare } from 'react-icons/bs';
import { AiFillDelete } from  'react-icons/ai';


export default function ProductCard({image, title, description, onclick, onclickEdit}:ProductCardType) {
  return (
    <div className='product__card'>
        <img className='product__card-image' src={image} alt="imagem do produto" />
        <h3 className='product__card-title'>{title}</h3>
        <p className='product__card-description'>{description}</p>
        <button onClick={onclick} title='Deletar produto' className='product__card-closeBtn'> <AiFillDelete size={19} /> </button>
        <button onClick={onclickEdit} title='Editar produto' className='product__card-editBtn'><BsPencilSquare size={16} /></button>
    </div>
  )
}
