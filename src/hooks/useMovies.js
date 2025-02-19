import { useState, useEffect } from 'react';

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '77a199c572fedbadace9e7f4786b2afd';
  const BASE_URL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      setMovies(data.results);
      setError(null);
    } catch (err) {
      setError('Error fetching movies');
      console.error('Error fetching movies:', err);
    } finally {
      setLoading(false);
    }
  };

  const addMovie = (movie) => {
    setMovies((prevMovies) => [movie, ...prevMovies]);
  };

  const editMovie = (updatedMovie) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === updatedMovie.id ? updatedMovie : movie
      )
    );
  };

  const deleteMovie = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== movieId)
    );
  };

  return {
    movies,
    loading,
    error,
    addMovie,
    editMovie,
    deleteMovie
  };
};

export default useMovies;