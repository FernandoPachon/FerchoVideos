import React, { useEffect, useState } from 'react';
import './App.css';
import Cabezera from './assets/Cabezera'
import axios from 'axios';
import Catalogo from './assets/Catalogo';
const App = () => {
const [id,setId]=useState(9882)

  return (
    <>
      <Cabezera />
      <Catalogo/>
      <h1>Contenedor</h1>
      
    </>
  )
}

export default App
