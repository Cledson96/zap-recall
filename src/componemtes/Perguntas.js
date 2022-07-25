import logo from './img/logo-pequeno.png';
import ImagensConcluidas from './ImagensConcluidas/ImagensConcluidas';
import React from 'react';
import Resultado from './Resultado/Resultado';
import ImgResultado from './ImgResultado/ImgResultado';
import AddPerguntas from './AddPerguntas/AddPerguntas';

function Perguntas(props) {

    const {
        meta,
        tela,
        setTela,
        deck
    } = props;


    const [concluido, setconcluido] = React.useState(0);
    const [resultado,setresultado] = React.useState([]);
    const [simbolos, setsimbolos] = React.useState([]);
    const [referencia, setreferencia] = React.useState([]);
    const [img_resultado, setimg_resultado] = React.useState([]);
    const [botao, setbotao] = React.useState([]);

    function aumentarconcluido() {
        setconcluido(concluido + 1);
    }

    let pergunta = deck.length;
    let renderizar = deck.map(function (value, index) { return (<AddPerguntas key ={index} setbotao = {setbotao} img = {setimg_resultado}referencia={referencia} setresultado ={setresultado} setreferencia = {setreferencia} setsimbolos={setsimbolos} meta={meta} tela={tela} setTela={setTela} botao={botao}  img_resultado={img_resultado} resultado={resultado} simbolos={simbolos} deck={deck} concluido={concluido} setconcluido={aumentarconcluido} index={index} perguntaa={value.pergunta} resposta={value.resposta} />) })

    return (
        <>
            <div className='perguntas'>
                <div className="logo">
                    <img alt='' src={logo} />
                    <h1>ZapRecall</h1>
                </div>
                {renderizar}
                <div className='concluido'>
                    <div className='imgresultado'>
                        <ImgResultado img_resultado={img_resultado} />
                    </div>
                    <Resultado resultado={resultado} />
                    <h4>{concluido}/{pergunta} CONCLUÍDOS</h4>
                    <div className='imagens_concluidas'>
                        <ImagensConcluidas simbolos={simbolos} />
                    </div>
                    <div>
                        {botao}
                    </div>
                </div>
            </div>
        </>
    )
}




export default Perguntas;
