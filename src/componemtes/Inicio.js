import Logo from './img/logo.png'

function Inicio() {
    return (
        <>
            <div className='inicio add'>
                <img src={Logo} />  
                <h1>ZapRecall</h1>
                <button onClick={desabilita}>Iniciar Recall!</button>
            </div>
        </>
    )
}
function desabilita(){
    document.querySelector(".inicio").classList.add("remove")
    document.querySelector(".inicio").classList.remove("add")
    document.querySelector(".Perguntas").classList.remove("remove")
    document.querySelector(".Perguntas").classList.add("add")
}           

export default Inicio;