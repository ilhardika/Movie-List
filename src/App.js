import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieCRUD from "./components/MovieCRUD";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=77a199c572fedbadace9e7f4786b2afd&language=en-US&page=1"
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

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

  return (
    <div className="bg-dark text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route
            path="/crud"
            element={
              <MovieCRUD
                movies={movies}
                addMovie={addMovie}
                editMovie={editMovie}
                deleteMovie={deleteMovie}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
