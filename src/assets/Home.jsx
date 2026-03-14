import React, { useState } from 'react'

const Home = () => {
    const [id, setId] = useState(9882)
  return (
    <div>
       <Cabezera setId={setId} />
        <Catalogo id={id} />
    </div>
  )
}

export default Home
