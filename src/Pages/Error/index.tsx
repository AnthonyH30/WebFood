import React from 'react';
import './styles.scss';
import errorimg from '../../assets/404.svg';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <main className='error-page'>
        <Link to='/' style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img title='Voltar para a pagina inicial' className='error-page__image' src={errorimg} alt="imagem de erro 404, pagina não encontrada" />
        </Link>
    </main>
  )
}
