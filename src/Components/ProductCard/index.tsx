import React from 'react';
import { ProductCardType } from '../../Types/ProductCardType';
import './styles.scss';

export default function ProductCard({image, title, description}:ProductCardType) {
  return (
    <div className='product__card'>
        <img className='product__card-image' src={image} alt="imagem do produto" />
        <h3 className='product__card-title'>{title}</h3>
        <p className='product__card-description'>{description}</p>
    </div>
  )
}
