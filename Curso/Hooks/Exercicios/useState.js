import React, { useState } from "react";

function App() {

    const [compras, setCompras] = useState([
        'Comprar uma mesa',
        'Comprar uma cadeira'
    ]);
    
    const [input, setInput] = useState('')

    function handleAdd(){
        setCompras([...compras, input]);
        setInput('');
    }

    return(
        <div>
            <ul>
                {compras.map(compra => (
                    <li key={compra}>{compra}</li>
                ))}
            </ul>
            <input type='text' value={input} onChange={e => setInput(e.target.value)} />
            <button type="button" onClick={handleAdd} >Adicionar</button>
        </div>
    )
}

export default App;