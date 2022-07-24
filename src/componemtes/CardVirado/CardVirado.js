import play from '../img/play.png'

export default function CardVirado(props) {
    const {index} = props

    function Add(ref) {
        ref.parentNode.querySelector(".perguntaVirada").classList.add("add")
        ref.parentNode.querySelector(".perguntaVirada").classList.remove("remove")
        ref.parentNode.querySelector(".pergunta").classList.add("remove")
        ref.parentNode.querySelector(".pergunta").classList.remove("add")
    }
    return (
        <div className={"pergunta add"} onClick={(ref) => { Add(ref.target) }}>

            <h2 onClick={(ref) => { Add(ref.target.parentNode) }} >Pergunta {index + 1}</h2>
            <img onClick={(ref) => { Add(ref.target.parentNode) }} src={play} />

        </div>

    )
}