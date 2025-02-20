import React, { useState, useMemo } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {
  Plus,
  Edit2,
  Trash2,
  Film,
  X,
  Search,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const MovieCRUD = ({ movies, addMovie, editMovie, deleteMovie }) => {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [posterPath, setPosterPath] = useState("");
  const [editingMovieId, setEditingMovieId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Table state
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState("title");
  const [sortDirection, setSortDirection] = useState("asc");
  const itemsPerPage = 5;

  // Filter and sort movies
  const filteredAndSortedMovies = useMemo(() => {
    return [...movies]
      .filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          movie.overview.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const aValue = a[sortField]?.toString().toLowerCase();
        const bValue = b[sortField]?.toString().toLowerCase();
        return sortDirection === "asc"
          ? aValue?.localeCompare(bValue)
          : bValue?.localeCompare(aValue);
      });
  }, [movies, searchTerm, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedMovies.length / itemsPerPage);
  const currentMovies = filteredAndSortedMovies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Sorting handler
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

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
    setShowModal(false);
  };

  const handleEdit = (movie) => {
    setTitle(movie.title);
    setOverview(movie.overview);
    setPosterPath(movie.poster_path);
    setEditingMovieId(movie.id);
    setShowModal(true);
  };

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold m-0">Movie Management</h2>
        <button
          className="btn btn-danger d-flex align-items-center gap-2"
          onClick={() => setShowModal(true)}
        >
          <Plus size={18} />
          Add New Movie
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-text bg-dark border-secondary">
            <Search size={18} className="text-light" />
          </span>
          <input
            type="text"
            className="form-control bg-dark text-white border-secondary"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th
                onClick={() => handleSort("title")}
                style={{ cursor: "pointer" }}
              >
                Title{" "}
                {sortField === "title" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp size={14} />
                  ) : (
                    <ChevronDown size={14} />
                  ))}
              </th>
              <th
                onClick={() => handleSort("overview")}
                style={{ cursor: "pointer" }}
              >
                Overview{" "}
                {sortField === "overview" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp size={14} />
                  ) : (
                    <ChevronDown size={14} />
                  ))}
              </th>
              <th>Poster</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentMovies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>
                  {movie.overview.length > 100
                    ? `${movie.overview.substring(0, 100)}...`
                    : movie.overview}
                </td>
                <td>
                  <img
                    src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: "46px", borderRadius: "4px" }}
                  />
                </td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-warning btn-sm d-flex align-items-center gap-1"
                      onClick={() => handleEdit(movie)}
                    >
                      <Edit2 size={14} />
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm d-flex align-items-center gap-1"
                      onClick={() => deleteMovie(movie.id)}
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="text-light">
          Showing {Math.min(currentMovies.length, itemsPerPage)} of{" "}
          {filteredAndSortedMovies.length} entries
        </div>
        <div className="d-flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`btn btn-sm ${
                currentPage === page ? "btn-danger" : "btn-outline-secondary"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={resetForm} centered size="lg">
        <Modal.Header
          className="border-0 bg-dark text-white"
          closeButton
          closeVariant="white"
        >
          <Modal.Title className="d-flex align-items-center gap-2">
            <Film size={24} className="text-danger" />
            {editingMovieId ? "Edit Movie" : "Add New Movie"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label text-light">Poster Image URL</label>
              <input
                type="text"
                className="form-control bg-dark text-white border-secondary"
                value={posterPath}
                onChange={(e) => setPosterPath(e.target.value)}
                placeholder="Enter TMDB poster path"
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label text-light">Movie Title</label>
              <input
                type="text"
                className="form-control bg-dark text-white border-secondary"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter movie title"
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label text-light">Overview</label>
              <textarea
                className="form-control bg-dark text-white border-secondary"
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
                placeholder="Enter movie overview"
                rows="4"
                required
              />
            </div>
            <div className="d-flex justify-content-end gap-2">
              <Button
                variant="outline-light"
                onClick={resetForm}
                className="d-flex align-items-center gap-2"
              >
                <X size={18} />
                Cancel
              </Button>
              <Button
                variant="danger"
                type="submit"
                className="d-flex align-items-center gap-2"
              >
                <Plus size={18} />
                {editingMovieId ? "Update Movie" : "Add Movie"}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MovieCRUD;
