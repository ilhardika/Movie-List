import React from "react";

const UserInfo = ({ user }) => {
  // Jika tidak ada user, tampilkan pesan
  if (!user) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning">Silakan login terlebih dahulu</div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-dark text-white">
          <h3>Informasi Pengguna</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">Detail Akun</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Username:</strong> {user.username}
                </li>
                <li className="list-group-item">
                  <strong>User ID:</strong> {user.id}
                </li>
                <li className="list-group-item">
                  <strong>Waktu Login:</strong> {user.loginTime}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
