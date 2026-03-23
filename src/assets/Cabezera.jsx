import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BotonWhastapp from './BotonWhastapp';
import Slider from './Slaider';

const Cabezera = ({ setId, form, soscuro }) => {
  const [oscuro, setOscuro] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()
  const categorias = [
    { nombre: 'Espacio', id: 9882 },
    { nombre: 'Anime', id: 210024 },
    { nombre: 'Guerra', id: 1956 },
    { nombre: 'Futuro', id: 2902 }
  ];
  const colores = {
    iluminacion: oscuro ? "#ffff" : "#353535fa",
    texto: oscuro ? "#000000" : "#ffff"
  }
  const handleModoOscuro = () => {
    setOscuro(!oscuro)
    document.body.style.backgroundColor = colores.iluminacion
    document.body.style.color = colores.texto
  }

  return (
    <>
      <header className='container-header'>
        <div className='container-header-div'>
          <div className='container-logo'>
            <a href=""><img width="100" src="src\assets\imgs\image-removebg-preview (1).png" alt="" /></a>
          </div>
          <nav className='bar-nav'>
            <ul className='bar-nav'>
              {categorias.map((cat) => (
                <li
                  key={cat.id}
                  className='nav-li'
                  onClick={() => {
                    setId(cat.id)
                    navigate('/')   // ← vuelve al inicio donde está el Catalogo
                  }}
                >
                  {cat.nombre}
                </li>
              ))}
            </ul>
          </nav>
          <div className='container-busqueda'>
            🔍
            <input className='input-busqueda' type="text" placeholder='Buscar...' />
          </div>
          <div className='container-user--icon'>
            <Link to="/Perfil" className='container-user--icon'>
              {isLogin ? `Conectarse` : `${form.nombre}`}
              <img width="100" src="src\assets\imgs\user.png" alt="" />
            </Link>
          </div>
          <div>
            <a className='modoOscuro' onClick={handleModoOscuro}>{oscuro ? "☀️" : "🌙"}</a>
          </div>
        </div>

      </header>
    </>
  )
}

export default Cabezera