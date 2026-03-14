import React, { useState } from 'react'

const Cabezera = ({setId}) => {
  const [oscuro, setOscuro] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
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
                onClick={()=>setId(cat.id)}
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
            <p className='nav-li'>{isLogin ? "Ingresar" : "Hola Fernando"}</p>
            <a href=""> <img width="100" src="src\assets\imgs\user.png" alt="" /></a>
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