import logo from './img/logo-pequeno.png'
import play from './img/play.png'
import React from 'react';
import virar from './img/virar.png'
import acertou from './img/acertou.png'
import errou from './img/errou.png'
import duvida from './img/duvida.png'
import parabens from './img/party.png'
import triste  from './img/sad.png'

let imgresultado = []
let resultado = [];
let simbolos = [];
let referencia = true;
const deck = [
    { id: "1", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "2", pergunta: "pergunta 2?aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "3", pergunta: "pergunta 3?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "4", pergunta: "pergunta 4?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "5", pergunta: "pergunta 5?", resposta: "Uaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssdffgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggipt" },
    { id: "6", pergunta: "pergunta 6?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "7", pergunta: "pergunta 7?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "8", pergunta: "pergunta 8?", resposta: "Uma extensão de linguagem do JavaScript" }

]

function CardVirado(props) {

    function Add(ref) {
        ref.parentNode.querySelector(".perguntaVirada").classList.add("add")
        ref.parentNode.querySelector(".perguntaVirada").classList.remove("remove")
        ref.parentNode.querySelector(".pergunta").classList.add("remove")
        ref.parentNode.querySelector(".pergunta").classList.remove("add")
    }

    return (
        <div className={"pergunta add"} onClick={(ref) => { Add(ref.target) }}>

            <h2 onClick={(ref) => { Add(ref.target.parentNode) }} >Pergunta {props.index + 1}</h2>
            <img onClick={(ref) => { Add(ref.target.parentNode) }} src={play} />

        </div>

    )
}

function CardResposta(props) {

    function Resultado(ref) {

        if (ref.innerHTML == "Não lembrei") {
            ref.parentNode.parentNode.parentNode.querySelector("img").setAttribute('src', (errou))
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.add("add_errado");
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.remove("remove");
            simbolos.push(<img src={errou} />);
            referencia = false;


        } else if (ref.innerHTML == "Quase não lembrei") {
            ref.parentNode.parentNode.parentNode.querySelector("img").setAttribute('src', (duvida))
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.add("add_duvida");
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.remove("remove");
            simbolos.push(<img src={duvida} />)
        } else {
            ref.parentNode.parentNode.parentNode.querySelector("img").setAttribute('src', (acertou))
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.add("add_acertou");
            ref.parentNode.parentNode.parentNode.querySelector(".pergunta").classList.remove("remove");
            simbolos.push(<img src={acertou} />)
        }
        ref.parentNode.parentNode.remove()
        if (props.concluido == deck.length - 1){
            if(referencia == true) {
                imgresultado.push(<img src={parabens} />)
                imgresultado.push("Parabéns!")
                resultado.push("Você não esqueceu de nenhum flashcard!")
            } else {
                imgresultado.push(<img src={triste} />)
                imgresultado.push("Putz...")
                resultado.push("Ainda faltam alguns... Mas não desanime!")
            }
        } 
    }
    return (
        <>
            <div className="resposta remove"  >
                {props.respostaa}
                <div className='respostas'>
                    <button onClick={(ref) => { props.setconcluido(); Resultado(ref.target); }}>Não lembrei</button>
                    <button onClick={(ref) => { props.setconcluido(); Resultado(ref.target); }} >Quase não lembrei</button>
                    <button onClick={(ref) => { props.setconcluido(); Resultado(ref.target); }} >Zap!</button>
                </div>
            </div>
        </>
    )
}
function CardPergunta(props) {
    function Add(ref) {
        ref.parentNode.parentNode.querySelector(".resposta").classList.add("add")
        ref.parentNode.parentNode.querySelector(".resposta").classList.remove("remove")
    }

    console.log(props.id)
    return (
        <div className="perguntaVirada remove"  >
            <h4>
                {props.perguntaa}
            </h4>

            <img onClick={(ref) => {
                Add(ref.target)
                ref.target.parentNode.remove()
            }} src={virar} />
        </div>
    )
}


function Add_perguntas(props) {

    return (

        <>
            <div className='card'>
                <CardVirado index={props.index} perguntaa={props.perguntaa} />
                <CardPergunta perguntaa={props.perguntaa} />
                <CardResposta setconcluido={props.setconcluido} concluido={props.concluido} respostaa={props.resposta} />
            </div>
        </>

    )

}
function Perguntas() {
    const [concluido, setconcluido] = React.useState(0);

    function aumentarconcluido() {
        setconcluido(concluido + 1);
    }
    let pergunta = deck.length
    let renderizar = deck.map(function (value, index) { return (<Add_perguntas concluido={concluido} setconcluido={aumentarconcluido} id={value.id} index={index} perguntaa={value.pergunta} resposta={value.resposta} />) })
    return (
        <>
            <div className='perguntas'>
                <div className="logo">
                    <img src={logo} />
                    <h1>ZapRecall</h1>
                </div>
                {renderizar}
                <div className='concluido'>
                    <div className='imgresultado'>
                        <Imgresultado />
                        </div>
                    <Resultado />
                    <h4>{concluido}/{pergunta} CONCLUÍDOS</h4>
                    <div className='imagens_concluidas'>
                        <ImagensConcluidas />
                    </div>
                </div>
            </div>
        </>
    )
}
function ImagensConcluidas(props) {
    console.log(props)

    return (
        <>
            {simbolos}
        </>
    )


}
function Resultado(props) {
    return (
        <>
            {resultado}
        </>
    )
}
function Imgresultado(props) {
    return (
        <>
            {imgresultado}
        </>
    )
}
export default Perguntas;
