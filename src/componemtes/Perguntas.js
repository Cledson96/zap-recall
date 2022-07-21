import logo from './img/logo-pequeno.png'
import play from './img/play.png'
const deck = [
    { id: "1", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "2", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "3", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "4", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "5", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "6", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "7", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "8", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" }
]
function CardVirado(props) {
    return (
        <div className={"pergunta"} onClick={(ref) => { console.log(ref.target) }}>
            <h2>Pergunta {props.index + 1}</h2>
            <img src={play} />
        </div>
    )
}
function CardPergunta(props) {
    return(
        <div className="perguntaVirada " onClick={() => { console.log(props.id) }}  ></div> 
    )
}
function Add_perguntas(props) {
    console.log(props.index)
    return (
        
        <>

            <CardVirado index = {props.index}/>
            <CardPergunta index = {props.index}/>
          
        </>

    )

}
function Perguntas() {
     let renderizar = deck.map(function(value,index){ return(<Add_perguntas id={value.id} index = {index}/>)})
    return (
        <>
            <div className='perguntas'>
                <div className="logo">
                    <img src={logo} />
                    <h1>ZapRecall</h1>
                </div>
                {renderizar}
            </div>
        </>
    )
}

export default Perguntas;
