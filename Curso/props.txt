import React from 'react';

const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social fb={props.facebook} />
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

const Social = (props) => {
  return(
    <div>
      <h1>Social Media</h1>
      <a href={props.fb}>Facebook</a>
      <a>Linkedin</a>
      <a>Youtube</a>
      <hr/>
    </div>
  )
}

function App() {

  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Lucas" cargo="Programador" idade="19" facebook="https://www.google.com" />
      <Equipe nome="Pedro" cargo="designer" idade="23" facebook="https://www.youtube.com"/>
    </div>
  );
}

export default App;