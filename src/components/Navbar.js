import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null); // Menghapus user dari state
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          LayarKaca21
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/crud">
                Movies
              </Link>
            </li>
            {user && ( // Menampilkan menu User Info hanya jika user sudah login
              <li className="nav-item">
                <Link className="nav-link" to="/user-info">
                  User Info
                </Link>
              </li>
            )}
          </ul>
          <div className="d-flex">
            {user ? (
              <button className="btn btn-outline-light" onClick={handleLogout}>
                Sign Out
              </button>
            ) : (
              <Link to="/login" className="btn btn-outline-light">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
