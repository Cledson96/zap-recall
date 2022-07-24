import "./style.css";
import CardVirado from '../CardVirado/CardVirado'
import CardPergunta from '../CardPergunta/CardPergunta'
import CardResposta from '../CardResposta/CardResposta'

export default function AddPerguntas(props) {
    const {
        referencia,
        img_resultado,
        resultado,
        concluido,
        deck,
        index,
        perguntaa,
        resposta,
        setconcluido,
        simbolos
    } = props;
    return (
        <>
            <div key={index} className='card'>
                <CardVirado index={index} perguntaa={perguntaa} />
                <CardPergunta index={index} perguntaa={perguntaa} />
                <CardResposta index={index} referencia={referencia} img_resultado={img_resultado} resultado={resultado} simbolos={simbolos} deck={deck} setconcluido={setconcluido} concluido={concluido} respostaa={resposta} />
            </div>
        </>
    )
}