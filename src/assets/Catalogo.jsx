import React, { useState, useEffect } from 'react';

const Catalogo = ({id}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Configuración de la API
  const apiKey = "59acb3eed66f1b684b545a259676c1a2";
  // Usamos el ID 9882 (Space) como ejemplo funcional
  const apiUrl = `https://api.themoviedb.org/3/keyword/${id}/movies?api_key=${apiKey}&language=es-ES`;

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener películas:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [id]);

  if (loading) return <p>Cargando películas...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Catálogo de Películas</h1>
      <div className="catalogo-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className='estilos-carta'>
      <img src={imageUrl} alt={movie.title} className='estilos-imagen' />
      <div style={{ padding: '10px' }}>
        <h3 style={{ fontSize: '1rem', margin: '10px 0' }}>{movie.title}</h3>
        <p style={{ fontSize: '0.8rem', color: '#666' }}>
          Estreno: {movie.release_date}
        </p>
        <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
          ⭐ {movie.vote_average}
        </p>
      </div>
    </div>
  );
};
export default Catalogo;