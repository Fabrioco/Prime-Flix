import React, {Component}  from "react";

class index extends Component{
  render(){
    return(
      <div id={this.props.id}>
        <h1>{this.props.nome}</h1>
        <p>Tem {this.props.idade} anos e trabalha de {this.props.cargo}</p>
      </div>
    )
  }
}

export default index;