import React from 'react'
import './App.css'
const App = () => {
  return (
    <>
      <header className='container-header'>
        <div className='container-header-div'>
          <div className='container-logo'>
            <a href=""><img width="100" src="src\assets\imgs\fercho.jpg" alt="" /></a>
          </div>
          <nav className='bar-nav'>
            <ul className='bar-nav'>
              <li>Inicio</li>
              <li>Series</li>
              <li>Peliculas</li>
              <li>Generos</li>
            </ul>
          </nav>
          <div className='container-busqueda'>
            <input className='input-busqueda' type="text" /><img src="https://www.flaticon.es/icono-gratis/vaso_14090240" alt="" />
          </div>
          <div className='container-user--icon'><a href=""> <img width="100" src="src\assets\imgs\user.png" alt="" /></a></div>
        </div>
      </header>
    </>
  )
}

export default App
