import Logo from './img/logo.png'

function Inicio(props) {
    return (
        <>
            <div className='inicio'>
                <img src={Logo} />
                <h1>ZapRecall</h1>
                <button onClick={() => {
                    props.tela2()
                }}>Iniciar Recall!</button>
            </div>
        </>
    )
}

export default Inicio;