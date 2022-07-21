import React from 'react';
import Inicio from './Inicio';
import Perguntas from './Perguntas'


function App() {

  const [tela, setTela] = React.useState(0);

  function tela2() {
    setTela(tela + 1)
  }
  if (tela == 0) {
    return (
      <>
        <Inicio tela2={tela2} />
      </>
    )
  } else if (tela == 1) {
    return (
      <>
        <Perguntas />
      </>
    )
  }
}


export default App;
