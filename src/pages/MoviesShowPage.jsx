import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ReviewsList from "../components/ReviewsList";
import ReviewsForm from "../components/ReviewsForm";

export default function MoviesShowPage() {
  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_URL_BACKEND_API;
  const [movie, setMovie] = useState();
  const fetchReviews = () => {
    axios.get(`${apiUrl}/${id}`).then((response) => {
      setMovie(response.data.data);
    });
  };
  useEffect(() => {
    fetchReviews();
  }, [id]);

  if (!movie) {
    return (
      <div className="container text-center mt-5">
        <h2>Caricamento..</h2>
      </div>
    );
  }
  return (
    <>
      <section className="d-flex justify-content-center align-items-center">
        <div className="container mt-5 text-center">
          <h1 className="mb-4">{movie.title}</h1>
          <img
            src={movie.image}
            alt={movie.title}
            className="img-fluid rounded mb-3 mx-auto d-block"
            style={{ maxWidth: "400px" }}
          />
          <p className="mt-3">
            <strong>Direct by: </strong> {movie.director}
          </p>
          <p>
            <strong>Year: </strong> {movie.release_year}
          </p>
          <p>
            <em>{movie.abstract}</em>
          </p>
        </div>
      </section>

      <ReviewsList movie={movie} />

      <ReviewsForm idMovie={movie.id} setMovie={setMovie} />
    </>
  );
}
