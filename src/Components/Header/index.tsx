import React, { memo, useContext } from "react";
import './styles.scss';
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Header(){
    
    const { SignOut } = useContext(AuthContext)

    const navigate = useNavigate();

    const logOutFunc = () =>{
        SignOut();
        navigate("/");
    }

    return(
        <header>
            <h2>WebFood</h2>
            <p onClick={logOutFunc}>Sign Out</p>
        </header>
    )
}

export default memo(Header);