// import logo from './logo.svg';
import React from 'react';
import a1 from './imgs/a1.png';
import PruebaCaritas from './components/TestCaritas/pruebaCaritas'
import { useState } from 'react';
import './App.css';
import Modulo from './components/TestCaritas/modulo';



function App() {
  return (
    <div className="App">
      <Modulo respuestaCorrecta={1} imagen={a1}/>
      <br/>
      <PruebaCaritas/>
    </div>
  );
}

export default App;






