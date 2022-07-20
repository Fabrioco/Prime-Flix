import React, { Component } from 'react';

class Equipe extends Component {
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
        <Social/>
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Olá sou o {this.props.nome} </h2>
        <h2>Cargo: {this.props.cargo}</h2>
        <h2>Idade: {this.props.idade} anos</h2>
      </div>
    );
  }
}

const Social = (props) => {
  return(
    <div>
      <p>Facebook</p>
    </div>
  );
}

function App() {

  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Fabricio" cargo="programador" idade="24" />
      <Equipe nome="Pedro" cargo="Designer" idade="18" />
    </div>
  );
}

export default App;