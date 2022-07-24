import Logo from '../img/logo.png'
import  "./style.css";

function Inicio(props) {
   const {tela2} = props;
   
    return (
        <>
            <div className='inicio'>
                <img src={Logo} />
                <h1>ZapRecall</h1>
                <button onClick={() => {
                   tela2()
                }}>Iniciar Recall!</button>
            </div>
        </>
    )
}

export default Inicio;