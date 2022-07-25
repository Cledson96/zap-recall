import "./style.css"

export default function Escolhadeck(props) {
    const { deck } = props;
    let renderizar = deck.map(function (value, index) { return (<Deck key = {index} index = {index} deck={value[0].deck} />) })
    return (
        <>
            <select>
            <option value= {deck}> Escolha seu deck </option>
                {renderizar}
            </select>

        </>

    )
}
function Deck(props) {
    const { deck , index} = props
    return (
        <>
           <option key = {index} value={deck}> Deck: {deck} </option>
        </>
    )
}

