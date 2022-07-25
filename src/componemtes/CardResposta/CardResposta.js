import acertou from '../img/acertou.png';
import errou from '../img/errou.png';
import duvida from '../img/duvida.png';
import parabens from '../img/party.png';
import triste from '../img/sad.png';
import React from 'react';


export default function CardResposta(props) {

    const {
        referencia,
        meta,
        tela,
        setTela,
        botao,
        img_resultado,
        resultado,
        simbolos,
        concluido,
        deck,
        respostaa,
        setconcluido,
    } = props;

    function Resultado(ref) {

        setconcluido();

        if (ref.innerHTML === "Não lembrei") {
            ref.parentNode.parentNode.parentNode.querySelector("img").setAttribute('src', (errou))
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.add("add_errado");
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.remove("remove");
            simbolos.push(<img key={concluido} alt='' src={errou} />);
            console.log(referencia)


        } else if (ref.innerHTML === "Quase não lembrei") {
            ref.parentNode.parentNode.parentNode.querySelector("img").setAttribute('src', (duvida))
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.add("add_duvida");
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.remove("remove");
            simbolos.push(<img key={concluido} alt='' src={duvida} />);
            referencia.push("1");
            console.log(referencia)

        } else {
            ref.parentNode.parentNode.parentNode.querySelector("img").setAttribute('src', (acertou))
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.add("add_acertou");
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.remove("remove");
            simbolos.push(<img key={concluido} alt='' src={acertou} />);
            referencia.push("2");
            console.log(referencia)
        }

        ref.parentNode.parentNode.remove();
        console.log(meta[0]);
        console.log(referencia)
        if (concluido === deck.length - 1) {
            botao.push(<button onClick={() => { setTela(!tela) ;console.log(meta[0])}}>REINICIAR RECALL</button>);
            if (referencia.length >= meta[0]) {
                img_resultado.push(<img key={concluido} alt='' src={parabens} />)
                img_resultado.push("Parabéns!")
                resultado.push("Você Bateu sua meta!")

            } else {
                img_resultado.push(<img key={concluido} alt='' src={triste} />)
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
                    <button onClick={(ref) => {  Resultado(ref.target); setconcluido() }} >Quase não lembrei</button>
                    <button onClick={(ref) => { Resultado(ref.target); setconcluido() }} >Zap!</button>
                </div>
            </div>
        </>
    )
}
