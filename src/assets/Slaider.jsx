import React, { useState, useEffect } from 'react';

const Slider = ({ id }) => {
  const [movies, setMovies] = useState([]);
  const [actual, setActual] = useState(0);

  const apiKey = "59acb3eed66f1b684b545a259676c1a2";
  const apiUrl = `https://api.themoviedb.org/3/keyword/${id}/movies?api_key=${apiKey}&language=es-ES`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Solo las primeras 8 con imagen disponible
        const conImagen = data.results.filter(m => m.poster_path).slice(0, 8);
        setMovies(conImagen);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchMovies();
  }, [id]);

  // Auto-avance cada 3 segundos
  useEffect(() => {
    if (movies.length === 0) return;
    const intervalo = setInterval(() => {
      setActual(prev => (prev + 1) % movies.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, [movies]);

  const anterior = () => setActual(prev => (prev - 1 + movies.length) % movies.length);
  const siguiente = () => setActual(prev => (prev + 1) % movies.length);

  if (movies.length === 0) return null;

  return (
    <div className="slider-container">
      
      <h1>slider</h1>
      
    </div>
  );
};

export default Slider;