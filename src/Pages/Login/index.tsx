import React, { useContext } from 'react';
import './styles.scss';
import loginimg from '../../assets/login.svg';
import Btn from '../../Components/Btn';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { BsGoogle } from 'react-icons/bs';

export default function Login() {

  const {  } = useContext(AuthContext);

  return (
    <main className='login-page'>
        <figure className='login-page__image'>
          <img src={loginimg} alt="Imagem de uma mulher encostada em uma pagina de login" />
        </figure>
        <aside className='login-page__aside'>
          <div className='aside__Login'>
            <h2 className='aside__Login-title'>Entrar</h2>
            <Btn style={{ marginTop: '20px', width: '150px', alignSelf: 'center'}}> <BsGoogle /> Entrar</Btn>
            <p className='aside__Login-register'>Não tem uma conta? <Link style={{color: 'white', textDecoration: 'none'}} to='/register'>Resgistre-se</Link></p>
          </div>
        </aside>
    </main>
  )
}
