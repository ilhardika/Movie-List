import React from "react";

const Home = ({ movies }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div>
      {/* Hero Section */}
      <header className="bg-dark text-white py-5 px-3">
        <div className="container">
          <h1 className="mb-3">Welcome to Layarkaca 21</h1>
          <p className="mb-3">
            Discover and enjoy the best movies from around the world.
          </p>
        </div>
      </header>

      {/* Popular Movies Section */}
      <div className="container py-5">
        <h2 className="mb-4">Popular Movies</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          {movies.map((movie) => (
            <div className="col" key={movie.id}>
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">
                    {truncateText(movie.overview, 100)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
