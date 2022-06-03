import P from 'prop-types';
import { useEffect, useState } from 'react';
import './App.css';


const Button = ({ incrementButton }) => {
  return <button onClick={() => incrementButton(10)}>+</button>
}

Button.propTypes = {
  incrementButton:P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
    )
}
export default App;