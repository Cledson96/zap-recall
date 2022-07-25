import Logo from '../img/logo.png'
import "./style.css";
import React from 'react';
import Metazap from '../Metazap/Metazap';
import Escolhadeck from '../Escolhadeck/Escolhadeck';

export default function Inicio(props) {
    const { tela2, deck, setTela } = props;
    return (
        <>
            <div className='inicio'>
                <img alt='' src={Logo} />
                <h1>ZapRecall</h1>
                <Escolhadeck deck={deck} />
                <Metazap deck={deck} setTela={setTela} tela2={tela2} />
            </div>
        </>
    )
}

