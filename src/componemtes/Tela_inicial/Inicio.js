import Logo from '../img/logo.png'
import "./style.css";
import React from 'react';


function Inicio(props) {
    const { tela2, deck} = props;
    return (
        <>
            <div className='inicio'>
                <img src={Logo} />
                <h1>ZapRecall</h1>
                <input type='number' placeholder='Digite sua meta de zaps...' />
                <button onClick={() => {
                    if (document.querySelector("input").value == '' || document.querySelector("input").value > deck.length || document.querySelector("input").value < 1) {
                        alert("Obrigatorio definir a meta de zap! Sendo no minimo um acerto!");
                    } else {
                        let ref =document.querySelector("input").value
                        tela2(ref);
                    }

                }}>Iniciar Recall!</button>
            </div>
        </>
    )
}

export default Inicio;