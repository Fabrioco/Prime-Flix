import React, {useState} from "react";

function App(){
    const [nome, setNome] = useState('Fabricio')

    function Mudar(){
        setNome("Pedro");
    }

    function Voltar(){
        setNome('Fabricio');
    }

    return(
        <div>
            <h1>{nome}</h1>
            <button type="button" onClick={Mudar} >Mudar</button>
            <button type="button" onClick={Voltar} >Voltar</button>
        </div>
    )
}

export default App;