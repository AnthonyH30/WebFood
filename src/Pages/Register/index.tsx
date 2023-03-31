import React, { useContext } from 'react';
import './styles.scss';
import registerimg from '../../assets/register.svg';
import Btn from '../../Components/Btn';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import googleIcon from '../../assets/google.svg';

export default function Register() {

  const {  } = useContext(AuthContext);

    
    return (
      <main className='register-page'>
          <figure className='register-page__image'>
              <img src={registerimg} alt="imagem de um homem encostado em uma tela de cadastro" />
          </figure>
          <aside className='register-page__aside'>
              <div className='aside__Register'>
                  <h2 className='aside__Register-title'>Cadastrar</h2>
                  <Btn style={{ marginTop: '20px', width: '150px', alignSelf: 'center'}}> <img src={googleIcon} alt="google icon" /> Cadastrar</Btn>
                  <p className='aside__Register-login'>Já possui uma conta? <Link style={{color: 'white', textDecoration: 'none'}} to='/'>Entrar</Link></p>
              </div>
          </aside>
      </main>
    )
}
