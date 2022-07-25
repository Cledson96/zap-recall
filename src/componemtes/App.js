import React from 'react';
import Inicio from './Tela_inicial/Inicio';
import Perguntas from './Perguntas'


function App() {

  const [tela, setTela] = React.useState(true);
  const [meta, setmeta] = React.useState([0]);
  const [deckselecionado, setdeckselecionado] = React.useState([0]);

  const deck = [
    [
      { deck: "Enfermagem", id: "1", pergunta: "O que é Enfermagem?", resposta: "A enfermagem é a ciência que se dedica ao cuidado da saúde do ser humano. Posto isto, faz parte do grupo das ciências da saúde." },
      { deck: "Enfermagem", id: "2", pergunta: "O que é Cancro Mole?E qual seu causador??", resposta: "Trata-se de Infecção Sexualmente Transmissível-IST ,é causada pela bactéria Haemophilus ducreyi" },
      { deck: "Enfermagem", id: "3", pergunta: "Qual o nome da mulher que desenvolveu o modelo de Enfermagem que conhecemos nos dias atuais?", resposta: "Florence Nightingale em 1840" },
      { deck: "Enfermagem", id: "4", pergunta: "Qual entidade fiscaliza e regulamenta a Enfermagem no Brasil?", resposta: "COREN" }
    ],
    [
      { deck: "Copa do mundo", id: "5", pergunta: "Quem foi a primeira seleção campeã da copa do mundo?", resposta: "Uruguai, em 1930" },
      { deck: "Copa do mundo", id: "6", pergunta: "Qual o maior campeão da copa do mundo?", resposta: "Brasillllllllll!!!!!! com 5 titulos. #RumoAoHexa" },
      { deck: "Copa do mundo", id: "7", pergunta: "Qual ano foi realizada a primeira copa do mundo no Brasil?", resposta: "1950" },
      { deck: "Copa do mundo", id: "8", pergunta: "Quantos titulos mundial possui a seleção holandesa?", resposta: "Nenhuma" }
    ]

  ]
  function tela2(refum, refdois) {
    setdeckselecionado(deckselecionado[0] = refum);
    meta.push(refdois);
    setTela(!tela);

  }

  return (
    <>
      {tela ? (<Inicio setmeta = {setmeta} setTela={setTela} tela2={tela2} deck={deck} />) : (<Perguntas meta={meta[meta.length - 1]} deck={deckselecionado} tela={tela} setTela={setTela} />)}
    </>
  )
}


export default App;
