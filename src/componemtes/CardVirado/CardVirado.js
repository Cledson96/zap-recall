import play from '../img/play.png'
import "./style.css"

export default function CardVirado(props) {
    const { index } = props

    function Add(ref) {
     
        if ((ref.parentNode.querySelector(".perguntaVirada").classList[1] === "remove")) {
            ref.parentNode.querySelector(".perguntaVirada").classList.add("add")
            ref.parentNode.querySelector(".perguntaVirada").classList.remove("remove")
            ref.parentNode.querySelector(".pergunta").classList.add("remove")
            ref.parentNode.querySelector(".pergunta").classList.remove("add")
        }

    }
    return (
        <div className={"pergunta add"} onClick={(ref) => {if(ref.target.parentNode.querySelector(".perguntaVirada").classList[1] !=null) {Add(ref.target) }}}>

            <h2 onClick={(ref) => { if(ref.target.parentNode.parentNode.querySelector(".perguntaVirada").classList[1] !=null) {Add(ref.target.parentNode) }}} >Pergunta {index + 1}</h2>
            <img alt="" onClick={(ref) => { if(ref.target.parentNode.parentNode.querySelector(".perguntaVirada").classList[1] !=null) {Add(ref.target.parentNode) }}} src={play} />

        </div>

    )
}