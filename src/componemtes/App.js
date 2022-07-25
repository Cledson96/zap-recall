import React from 'react';
import Inicio from './Tela_inicial/Inicio';
import Perguntas from './Perguntas'


function App() {
  
  const [tela, setTela] = React.useState(true);
  const [meta, setmeta] = React.useState([]);
  
    const deck = [
    { id: "1", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "2", pergunta: "pergunta 2?aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "3", pergunta: "pergunta 3?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "4", pergunta: "pergunta 4?", resposta: "Uma extensão de linguagem do JavaScript" }
    
]

  function tela2(ref) {
  setTela(!tela);
  setmeta(meta[0] = ref);
  console.log(ref);
 }
return (
  <>
  {tela ? (<Inicio tela2={tela2} deck={deck} />) : ( <Perguntas meta={meta} deck = {deck} tela={tela} setTela={setTela} />)}
  </>
)
}

export default App;
