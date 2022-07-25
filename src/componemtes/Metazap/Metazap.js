import "./style.css"
export default function Metazap(props) {
    const { deck, tela2 } = props
    let deckselecionado = [];
    return (
        <>
            <input type='number' placeholder='Digite sua meta de zaps...' />
            <button onClick={() => {
                if (document.querySelector("select").selectedIndex === 0) { alert("Obrigatório selecionar um deck!!") } else {
                    deckselecionado[0] = deck[document.querySelector("select").selectedIndex - 1];

                    if (document.querySelector("input").value === '' || document.querySelector("input").value > deckselecionado[0].length || document.querySelector("input").value < 1) {
                        alert("Obrigatorio definir a meta de zap! Sendo no minimo um acerto!");
                        deckselecionado[0] = deck[document.querySelector("select").selectedIndex - 1];

                    } else {

                        tela2(deckselecionado[0], document.querySelector("input").value)

                    }
                }


            }}>Iniciar Recall!</button>
        </>

    )
}