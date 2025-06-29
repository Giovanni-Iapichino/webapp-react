import { NavLink } from "react-router-dom";

export default function MoviesCard({ movie }) {
  return (
    <div
      className="card-movie h-100 m-3 shadow-sm"
      style={{ width: "100%", maxWidth: "400px" }}
    >
      <div>
        <img
          src={movie.image}
          alt={movie.title}
          className="card-img-top object-fit-cover"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-body d-flex flex-column gap-1 mt-3 mb-3">
        <h5 className="card-title text-center">{movie.title}</h5>
        <p className="card-text text-center small flex-grow-1">
          <em>{movie.abstract}</em>
        </p>
        <NavLink to={`/movies/${movie.id}`} className="btn btn mt-auto">
          See More
        </NavLink>
      </div>
    </div>
  );
}
