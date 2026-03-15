const Perfil = ({ form, setForm, setIsLogin }) => {

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const guardar = () => {
    if (form.nombre.trim() === "") return
    setIsLogin(true)   // ← activa el login al guardar
  }

  return (
    <>
     <div className="container-datos--form">
      <input type='text'  name="nombre"   value={form.nombre}   onChange={handleChange} placeholder='Nombre' />
      <input type='email' name="correo"   value={form.correo}   onChange={handleChange} placeholder='Correo' />
      <input type='tel'   name="telefono" value={form.telefono} onChange={handleChange} placeholder='Teléfono' />
      <input type='checkbox'  name="foto"     value={form.foto}     onChange={handleChange} placeholder='URL de foto' />
      <input type='checkbox'  name="foto"     value={form.foto}     onChange={handleChange} placeholder='URL de foto' />
      <button onClick={guardar}>Guardar</button>
    </div>
    <div>
      <p>{form.nombre}</p>
     <p>Nombre:  {form.nombre}</p>
     <p>Correo:  {form.correo}</p>
     <p>Telefono:  {form.telefono}</p>
     
    </div>
    </>
   
  )
}

export default Perfil