import modelo from './img/2022.jpg';
import './App.css';
import Boton from '../src/componentes/boton'
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {
  const [input,setInput]= useState('');

  const agregarValor = val => {
    setInput(input + val);
  };

  const calcularResultado= () => {
    if(input){
      setInput(evaluate(input));
    } else{
      alert('Por favor ingrese valores para realizar operaciones')
    }
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img src={modelo} className='logo-camp' alt='logo de calc'/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>

      <div className='fila'>
        <Boton manejarClic={agregarValor}>1</Boton>
        <Boton manejarClic={agregarValor}>2</Boton>
        <Boton manejarClic={agregarValor}>3</Boton>
        <Boton manejarClic={agregarValor}>+</Boton>
        </div>
      <div className='fila'>
        <Boton manejarClic={agregarValor}>4</Boton>
        <Boton manejarClic={agregarValor}>5</Boton>
        <Boton manejarClic={agregarValor}>6</Boton>
        <Boton manejarClic={agregarValor}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarValor}>7</Boton>
        <Boton manejarClic={agregarValor}>8</Boton>
        <Boton manejarClic={agregarValor}>9</Boton>
        <Boton manejarClic={agregarValor}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarValor}>0</Boton>
        <Boton manejarClic={agregarValor}>.</Boton>
        <Boton manejarClic={agregarValor}>/</Boton>
      </div>
      <div className='fila'>
        <BotonClear manejarClear={()=>setInput('')}>Clear</BotonClear>
      </div>
      <footer>
      <div className='pie'>
        <p className='pieTitulo'>Derechos Reservados &copy;2022</p>
      </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
