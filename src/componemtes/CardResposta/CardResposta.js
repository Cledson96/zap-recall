import acertou from '../img/acertou.png';
import errou from '../img/errou.png';
import duvida from '../img/duvida.png';
import parabens from '../img/party.png';
import triste from '../img/sad.png';
import React from 'react';

export default function CardResposta(props) {

    const {
        referencia,
        img_resultado,
        resultado,
        simbolos,
        concluido,
        deck,
        respostaa,
        setconcluido,
    } = props;

    function Resultado(ref) {

        if (ref.innerHTML == "Não lembrei") {
            ref.parentNode.parentNode.parentNode.querySelector("img").setAttribute('src', (errou))
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.add("add_errado");
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.remove("remove");
            simbolos.push(<img src={errou} />);
            referencia.push("1");

        } else if (ref.innerHTML == "Quase não lembrei") {
            ref.parentNode.parentNode.parentNode.querySelector("img").setAttribute('src', (duvida))
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.add("add_duvida");
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.remove("remove");
            simbolos.push(<img src={duvida} />);
        } else {
            ref.parentNode.parentNode.parentNode.querySelector("img").setAttribute('src', (acertou))
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.add("add_acertou");
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.remove("remove");
            simbolos.push(<img src={acertou} />);
        }
        ref.parentNode.parentNode.remove();

        if (concluido == deck.length - 1) {
            if (referencia.length == 0) {
                img_resultado.push(<img src={parabens} />)
                img_resultado.push("Parabéns!")
                resultado.push("Você não esqueceu de nenhum flashcard!")
            } else {
                img_resultado.push(<img src={triste} />)
                img_resultado.push("Putz...")
                resultado.push("Ainda faltam alguns... Mas não desanime!")
            }
        }
    }
    return (
        <>
            <div className="resposta remove">
                {respostaa}
                <div className='respostas'>
                    <button onClick={(ref) => { Resultado(ref.target); setconcluido() }}>Não lembrei</button>
                    <button onClick={(ref) => { Resultado(ref.target); setconcluido() }} >Quase não lembrei</button>
                    <button onClick={(ref) => { Resultado(ref.target); setconcluido() }} >Zap!</button>
                </div>
            </div>
        </>
    )
}
