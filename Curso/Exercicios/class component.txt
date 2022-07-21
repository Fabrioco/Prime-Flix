import React, { Component } from "react";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
       nome: "Fabricio",
       contador: 0
    }
      this.change = this.change.bind(this)
      this.aumentar = this.aumentar.bind(this)
      this.diminuir = this.diminuir.bind(this)
      this.back = this.back.bind(this)
  }

  change(){
    let state = this.state;
    state.nome = 'Pedro'
    this.setState(state)
  }

  back(){
    let state = this.state
    state.nome = 'Fabricio'
    this.setState(state)
  }

  aumentar(){
    let state = this.state
    state.contador += 1;
    if(state.contador > 15){
      alert("parou de funcionar");
      return;
    }
    this.setState(state)
  }

  diminuir(){
    let state = this.state
    state.contador -= 1;
    if(state.contador < 0){
      alert("O numero nao passa de 0")
      return;
    }
    this.setState(state)
  }

  render(){
    return(
      <div>
        <h3>Clique no nome para mudar</h3>
        <p onClick={this.change}>{this.state.nome}</p>
        <button onClick={this.back}>Voltar ao nome antigo</button>
        <h2>Contador</h2>
        <p>{this.state.contador}</p>
        <button onClick={this.diminuir}>-</button> <button onClick={this.aumentar}>+</button>
      </div>
    );
  }
}

export default App;