import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';  // ← agregar
import Cabezera from './assets/Cabezera';
import Catalogo from './assets/Catalogo';
import Perfil from './assets/Perfil';               // ← agregar

const App = () => {
  const [id, setId] = useState(9882)
  const [form, setForm] = useState({     // ← estado aquí
    nombre: "",
    correo: "",
    telefono: "",
    foto: ""
  })
  
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>

      <Cabezera setId={setId} form={form} isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Catalogo id={id} />} />
        <Route path="/Perfil" element={<Perfil setForm={setForm} form={form} setIsLogin={setIsLogin} />} />
      </Routes>
    </>
  )
}

export default App