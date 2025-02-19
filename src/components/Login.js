import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, LogIn } from "lucide-react";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "123" && password === "123") {
      const userInfo = {
        username: username,
        id: Date.now(),
        loginTime: new Date().toLocaleString(),
      };
      setUser(userInfo);
      setError("");
      navigate("/user-info");
    } else {
      setError("Invalid username or password");
      setUser(null);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #1a1c20 0%, #0f1012 100%)",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        <div className="p-4 p-md-5">
          <div className="text-center mb-4">
            <h2 className="text-white fw-bold mb-2">Welcome</h2>
            <p className="text-light">Sign in to continue to MovieList</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-4 position-relative">
              <div className="input-group">
                <span
                  className="input-group-text border-0"
                  style={{ background: "rgba(255, 255, 255, 0.05)" }}
                  light
                >
                  <User size={18} className="text-light" />
                </span>
                <input
                  type="text"
                  className="form-control border-0 ps-2 text-light"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                  }}
                />
              </div>
            </div>

            <div className="mb-4 position-relative">
              <div className="input-group">
                <span
                  className="input-group-text border-0"
                  style={{ background: "rgba(255, 255, 255, 0.05)" }}
                >
                  <Lock size={18} className="text-light" />
                </span>
                <input
                  type="password"
                  className="form-control border-0 ps-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "white",
                  }}
                />
              </div>
            </div>

            {error && (
              <div className="alert alert-danger py-2 text-center" role="alert">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn w-100 d-flex align-items-center justify-content-center gap-2"
              style={{
                background: "linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%)",
                color: "white",
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                transition: "transform 0.2s ease",
              }}
            >
              <LogIn size={18} />
              Sign In
            </button>

            <div className="text-center mt-4">
              <small className="text-light">
                <div>Demo credentials:</div>
                <div>Username: 123 | Password: 123</div>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
