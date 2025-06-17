import ReviewsList from "../components/ReviewsList";

const movie = {
  id: 1,
  title: "Inception",
  director: "Christopher Nolan",
  genre: "Science Fiction",
  release_year: 2010,
  abstract:
    "A skilled thief is given a chance at redemption if he can successfully perform inception.",
  image: "http://localhost:3000/img/movies/inception.jpg",
  created_at: "2024-11-29T10:40:13.000Z",
  updated_at: "2025-05-22T10:55:27.000Z",
};

export default function MoviesShowPage() {
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

      <ReviewsList />
    </>
  );
}
