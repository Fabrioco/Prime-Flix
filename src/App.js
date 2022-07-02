import React from 'react';

const Bemvindo = (props) => {
  return(
    <div>
      <h2>Bem-vindo {props.nome} </h2>
      <h3>Tenho {props.idade} anos</h3>
    </div>
  );
}

function App() {

  return (
    <div>
      Olá mundo!
      <Bemvindo nome="Lucas" idade="19"/>
      <Bemvindo nome="paulo" idade="25"/>
    </div>
  );
}

export default App;