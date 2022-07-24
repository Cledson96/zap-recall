import React from 'react';
import Inicio from './Tela_inicial/Inicio';
import Perguntas from './Perguntas'


function App() {
  const [tela, setTela] = React.useState(true);

  const deck = [
    { id: "1", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "2", pergunta: "pergunta 2?aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "3", pergunta: "pergunta 3?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "4", pergunta: "pergunta 4?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "5", pergunta: "pergunta 5?", resposta: "Uaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssdffgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggipt" },
    { id: "6", pergunta: "pergunta 6?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "7", pergunta: "pergunta 7?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: "8", pergunta: "pergunta 8?", resposta: "Uma extensão de linguagem do JavaScript" }
]


  function tela2() {
    setTela(!tela);
   
  }
  
return (
  <>
  {tela ? (<Inicio tela2={tela2} />) : ( <Perguntas  deck = {deck} tela={tela} setTela={setTela} />)}
  </>
)
}

export default App;
