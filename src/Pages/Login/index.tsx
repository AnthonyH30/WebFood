import React from 'react';
import './styles.scss';
import loginimg from '../../assets/login.svg';
import Input from '../../Components/Input';
import Btn from '../../Components/Btn';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main className='login-page'>
        <figure className='login-page__image'>
          <img src={loginimg} alt="Imagem de uma mulher encostada em uma pagina de login" />
        </figure>
        <aside className='login-page__aside'>
          <form className='aside__form'>
            <h2 className='aside__form-title'>Entrar</h2>
            <label title='Email' htmlFor="email">E-mail:</label>
            <Input id='email' placeholder='E-mail' />
            <label title='Senha' htmlFor="senha">Senha:</label>
            <Input id='senha' placeholder='Senha' type='password' />
            <Btn style={{backgroundColor: 'white', color: '#c42f2f', marginTop: '20px', width: '150px', alignSelf: 'center'}}>Entrar</Btn>
            <p className='aside__form-register'>Não tem uma conta? <Link style={{color: 'white', textDecoration: 'none'}} to='/register'>Resgistre-se</Link></p>
          </form>
        </aside>
    </main>
  )
}
