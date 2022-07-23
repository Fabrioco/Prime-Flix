import React, {Component}  from "react";

class Index extends Component{
  render(){
    return(
        <div key={this.props.id}>
          <h2>Personagem: {this.props.personagem} </h2>
          <h4>Melhor Skin: {this.props.melhorskin} </h4>
          <h4>Pior Skin: {this.props.piorskin} </h4>
      </div>
    )
  }
}

export default Index;