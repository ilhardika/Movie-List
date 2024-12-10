import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieCRUD from "./components/MovieCRUD";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo"; // Pastikan ini diimpor dengan benar
import Logout from "./components/Logout";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null);

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
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route
            path="/"
            element={user ? <Home movies={movies} /> : <Navigate to="/login" />}
          />
          <Route
            path="/crud"
            element={
              <ProtectedRoute user={user}>
                <MovieCRUD
                  movies={movies}
                  addMovie={addMovie}
                  editMovie={editMovie}
                  deleteMovie={deleteMovie}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-info"
            element={
              <ProtectedRoute user={user}>
                <UserInfo user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <ProtectedRoute user={user}>
                <Logout setUser={setUser} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
