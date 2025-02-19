import React from "react";
import { User, Clock } from "lucide-react";

const UserInfo = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div
            className="card bg-dark text-white border-0"
            style={{
              background:
                "linear-gradient(145deg, rgba(26,28,32,0.9) 0%, rgba(15,16,18,0.9) 100%)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              borderRadius: "16px",
            }}
          >
            <div className="card-body p-4">
              {/* Profile Header */}
              <div className="text-center mb-4">
                <div className="mb-3">
                  <div
                    className="d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%)",
                    }}
                  >
                    <User size={40} className="text-white" />
                  </div>
                </div>
                <h2 className="fw-bold mb-1">{user.username}</h2>
                <p className="text-light">User Profile</p>
              </div>

              {/* User Details */}
              <div className="border-top border-secondary pt-4">
                <div className="row g-4">
                  {/* User ID */}
                  <div className="col-12">
                    <div
                      className="d-flex align-items-center p-3"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: "12px",
                      }}
                    >
                      <div className="me-3">
                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "10px",
                            background: "rgba(255,75,43,0.1)",
                          }}
                        >
                          <User size={20} className="text-danger" />
                        </div>
                      </div>
                      <div>
                        <div className="text-light small">User ID</div>
                        <div className="fw-medium">{user.id}</div>
                      </div>
                    </div>
                  </div>

                  {/* Login Time */}
                  <div className="col-12">
                    <div
                      className="d-flex align-items-center p-3"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: "12px",
                      }}
                    >
                      <div className="me-3">
                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "10px",
                            background: "rgba(255,75,43,0.1)",
                          }}
                        >
                          <Clock size={20} className="text-danger" />
                        </div>
                      </div>
                      <div>
                        <div className="text-light small">Last Login</div>
                        <div className="fw-medium">{user.loginTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Session Info */}
              <div className="mt-4 text-center">
                <p className="text-light mb-0 small">Current Session Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
