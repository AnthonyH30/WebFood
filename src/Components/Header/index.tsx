import React, { memo } from "react";
import { user } from "../../user";
import './styles.scss';

function Header(){
    return(
        <header>
            <h2>WebFood</h2>
            <p>{user.name}</p>
        </header>
    )
}

export default memo(Header);