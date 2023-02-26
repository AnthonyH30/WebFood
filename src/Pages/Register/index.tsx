import React from 'react';
import './styles.scss';
import registerimg from '../../assets/register.svg';
import Btn from '../../Components/Btn';
import Input from '../../Components/Input';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <main className='register-page'>
        <figure className='register-page__image'>
            <img src={registerimg} alt="imagem de um homem encostado em uma tela de cadastro" />
        </figure>
        <aside className='register-page__aside'>
            <form className='aside__form'>
                <h2 className='aside__form-title'>Cadastrar</h2>
                <label title='Nome do Estabelecimento' htmlFor="name">Nome do Estabelecimento</label>
                <Input id='name' placeholder='Nome do Estabelecimento' />
                <label title='Email' htmlFor="email">E-mail</label>
                <Input id='email' placeholder='Email' />
                <label title='Senha' htmlFor="password">Senha</label>
                <Input id='password' type='password' placeholder='Senha' />
                <Btn style={{backgroundColor: 'white', color: '#c42f2f', marginTop: '20px', width: '150px', alignSelf: 'center'}}>Cadastrar</Btn>
                <p className='aside__form-login'>Já possui uma conta? <Link style={{color: 'white', textDecoration: 'none'}} to='/'>Entrar</Link></p>
            </form>
        </aside>
    </main>
  )
}