import React, { memo } from "react";
import './styles.scss';
import Header from '../../Services/Header';

function Home(){
    return(
        <>
            <Header />
        </>
    )
}

export default memo(Home);