import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const MovieCRUD = ({ movies, addMovie, editMovie, deleteMovie }) => {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [posterPath, setPosterPath] = useState("");
  const [editingMovieId, setEditingMovieId] = useState(null);
  const [showModal, setShowModal] = useState(false); // State untuk mengontrol tampilan modal

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: editingMovieId || Date.now(),
      title,
      overview,
      poster_path: posterPath,
    };

    if (editingMovieId) {
      editMovie(newMovie);
    } else {
      addMovie(newMovie);
    }

    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setOverview("");
    setPosterPath("");
    setEditingMovieId(null);
    setShowModal(false); // Menutup modal setelah selesai
  };

  const handleEdit = (movie) => {
    setTitle(movie.title);
    setOverview(movie.overview);
    setPosterPath(movie.poster_path);
    setEditingMovieId(movie.id);
    setShowModal(true); // Menampilkan modal saat mengedit
  };

  return (
    <div className="container mt-5">
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Image (TMDB URL)</label>
          <input
            type="text"
            className="form-control"
            value={posterPath}
            onChange={(e) => setPosterPath(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Overview</label>
          <textarea
            className="form-control"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-secondary">
          {editingMovieId ? "Update Movie" : "Add Movie"}
        </button>
      </form>

      {/* Movie List */}
      <h2 className="mt-5">Movie List</h2>
      <table className="table table-dark mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Overview</th>
            <th>Poster</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.overview}</td>
              <td>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: "50px" }}
                />
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(movie)}
                  title="Edit"
                >
                  <i className="fas fa-edit"></i> {/* Ikon Edit */}
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteMovie(movie.id)}
                  title="Delete"
                >
                  <i className="fas fa-trash"></i> {/* Ikon Delete */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Editing Movie */}
      <Modal show={showModal} onHide={resetForm}>
        <Modal.Header className="bg-dark text-white" closeButton>
          <Modal.Title>
            {editingMovieId ? "Edit Movie" : "Add Movie"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <form onSubmit={handleSubmit} className="bg-dark text-white">
            <div className="mb-3">
              <label className="form-label">Image (TMDB URL)</label>
              <input
                type="text"
                className="form-control"
                value={posterPath}
                onChange={(e) => setPosterPath(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Overview</label>
              <textarea
                className="form-control"
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
                required
              />
            </div>
            <Button
              variant="primary"
              type="submit"
              className="btn btn-secondary"
            >
              {editingMovieId ? "Update Movie" : "Add Movie"}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MovieCRUD;
