import React from 'react';

const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
    </div>
  );
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Olá sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade {props.idade} anos</h3>
      <hr/>
    </div>
  );
}

function App() {

  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Lucas" cargo="Programador" idade="19" />
    </div>
  );
}

export default App;