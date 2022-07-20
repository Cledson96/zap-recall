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

function Add_perguntas(props) {
    return (
        <div className="pergunta">
            <h2>Pergunta {props.id}</h2> 
            <img src={play} />
        </div>
    )

}
function Perguntas() {
    let renderizar = deck.map(value => <Add_perguntas id={value.id} />)
    return (
        <>
            <div className='perguntas remove'>
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
