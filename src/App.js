import React, { useState } from "react";

function App(){
    const [contador, setContador] = useState(0)
    function Aumentar(){
       setContador(contador + 1)
    }
    function Diminuir(){
        setContador(contador - 1)
        if(contador < 0){
            alert('o contador n passa de 0')
            return;
        } 
    }


    return(
        <div>
        <h2>{contador}</h2>
        <button type="button" onClick={Diminuir}>-</button>
        <button type="button" onClick={Aumentar} >+</button>
        </div>
    )
}

export default App;