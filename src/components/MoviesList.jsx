import MoviesCard from "./MoviesCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLoader } from "../contexts/LoaderContext";

const apiUrl = import.meta.env.VITE_URL_BACKEND_API;

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const { showLoader, hideLoader } = useLoader();

  const fetchMovies = () => {
    showLoader();
    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.data);
      })
      .finally(() => {
        hideLoader();
      });
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
