import virar from '../img/virar.png';
import "./style.css";

export default function CardPergunta(props) {
   const {perguntaa} = props;
    function Add(ref) {
        ref.parentNode.parentNode.querySelector(".resposta").classList.add("add")
        ref.parentNode.parentNode.querySelector(".resposta").classList.remove("remove")
    }

    return (
        <div className="perguntaVirada remove"  >
            <h4>
                {perguntaa}
            </h4>

            <img alt='' onClick={(ref) => {
                Add(ref.target)
                ref.target.parentNode.remove()
            }} src={virar} />
        </div>
    )
}