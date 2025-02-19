import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieCRUD from "./components/MovieCRUD";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";
import Logout from "./components/Logout";
import useMovies from "./hooks/useMovies";

const App = () => {
  const [user, setUser] = useState(null);
  const { movies, loading, error, addMovie, editMovie, deleteMovie } = useMovies();

  if (loading) {
    return <div className="container mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="container mt-5 text-danger">{error}</div>;
  }

  return (
    <div id="main-wrapper" className="bg-dark text-white">
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          {/* Home accessible without login */}
          <Route path="/" element={<Home movies={movies} />} />
          {/* CRUD operations require login */}
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
          {/* User info requires login */}
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
