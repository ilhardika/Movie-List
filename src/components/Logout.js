import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setUser(null);

    navigate("/login");
  }, [setUser, navigate]);

  return (
    <div className="container mt-5">
      <div className="alert alert-info">
        Anda telah logout. Mengalihkan ke halaman login...
      </div>
    </div>
  );
};

export default Logout;
