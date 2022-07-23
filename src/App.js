import React, { Component } from "react";
import Index from './components/Feed'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      teste:[
        {id:1, personagem: 'Rakan', mskin:'Guardião estelar e Sabugueiro', pskin:'arcana'},
        {id:2, personagem: 'Braum', mskin: 'Cidade do crime', pskin:'El tigre'},
        {id:3, personagem: 'Karma', mskin: 'Dragoa da tranqulidade', pskin:'Ordem de lótus'}
      ]
    }
  }
  render(){
    return(
      <div>
        {this.state.teste.map((item)=>{
          return(
           <Index key={item.id} personagem={item.personagem} melhorskin={item.mskin} piorskin={item.pskin} />
          )})}
      </div>
    )
  }
}

export default App;