import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Film, Home, Settings, User, LogOut, LogIn } from "lucide-react";

const Navbar = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    setUser(null);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(to right, #1a1c20, #0f1012)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <Film size={24} className="text-danger" />
          <span className="fw-bold">LayarKaca21</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className={`nav-link d-flex align-items-center gap-2 ${
                  isActivePath("/") ? "active" : ""
                }`}
                to="/"
              >
                <Home size={18} />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link d-flex align-items-center gap-2 ${
                  isActivePath("/crud") ? "active" : ""
                }`}
                to="/crud"
              >
                <Settings size={18} />
                Movies Management
              </Link>
            </li>
            {user && (
              <li className="nav-item">
                <Link
                  className={`nav-link d-flex align-items-center gap-2 ${
                    isActivePath("/user-info") ? "active" : ""
                  }`}
                  to="/user-info"
                >
                  <User size={18} />
                  User Info
                </Link>
              </li>
            )}
          </ul>

          <div className="d-flex align-items-center">
            {user ? (
              <button
                className="btn btn-outline-danger d-flex align-items-center gap-2"
                onClick={handleLogout}
              >
                <LogOut size={18} />
                Sign Out
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-danger d-flex align-items-center gap-2"
              >
                <LogIn size={18} />
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
