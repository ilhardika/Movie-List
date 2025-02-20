import React from "react";
import { Star, Calendar, Clock } from "lucide-react";

const Home = ({ movies }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="bg-dark text-white">
      {/* Hero Section */}
      <header
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://image.tmdb.org/t/p/original' +
            (movies[0]?.backdrop_path || "") +
            '")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          position: "relative",
        }}
      >
        <div className="container h-100 d-flex flex-column justify-content-center">
          <div className="row">
            <div className="col-md-8">
              <h1 className="display-4 fw-bold mb-4">Welcome to Layar 21</h1>
              <p className="lead mb-4">
                Discover the latest and greatest movies from around the world.
                Your ultimate destination for entertainment.
              </p>
              <button className="btn btn-danger btn-lg px-5">
                Explore Movies
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Popular Movies Section */}
      <div className="container py-5">
        <h2 className="fw-bold mb-4">Popular Movies</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {movies.map((movie) => (
            <div className="col" key={movie.id}>
              <div
                className="card bg-dark h-100 border-0"
                style={{
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  height: "100%",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div style={{ position: "relative", paddingTop: "150%" }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="card-img-top"
                    alt={movie.title}
                    style={{
                      borderRadius: "12px",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-warning text-dark d-flex align-items-center gap-1">
                      <Star size={14} />
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-light">
              © 2025 Layarkaca 21. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
