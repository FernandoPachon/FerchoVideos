import React, { useState } from 'react'

const Cabezera = () => {
  const[oscuro,setOscuro]=useState(false)
  const colores={
    iluminacion: oscuro ? "#ffff" :"#525252fa",
    texto: oscuro ?"#000000" : "#ffff"
  }
  const handleModoOscuro = ()=>{
   setOscuro(!oscuro)
    document.body.style.backgroundColor=colores.iluminacion
    document.body.style.color=colores.texto
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
              <li>Inicio</li>
              <li>Series</li>
              <li>Peliculas</li>
              <li>Generos</li>
            </ul>
          </nav>
          <div className='container-busqueda'>
            <input className='input-busqueda' type="text" /><img src="https://www.flaticon.es/icono-gratis/vaso_14090240" alt="" />
          </div>
          <div className='container-user--icon'><a href=""> <img width="100" src="src\assets\imgs\user.png" alt="" /></a>
          <a className='modoOscuro' onClick={handleModoOscuro}>{oscuro ?"☀️" : "🌙"}</a>
          </div>
        </div>
  
      </header>
    </>
  )
}

export default Cabezera
