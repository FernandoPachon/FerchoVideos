import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';  // ← agregar
import Cabezera from './assets/Cabezera';
import Catalogo from './assets/Catalogo';
import Perfil from './assets/Perfil';               // ← agregar

const App = () => {
  const [id, setId] = useState(9882)

  return (
    <>
      <Cabezera setId={setId} />
      <Routes>
        <Route path="/"       element={<Catalogo id={id} />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>
    </>
  )
}

export default App