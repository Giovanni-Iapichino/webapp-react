import ReviewCard from "./ReviewsCard";

export default function ReviewsList({ movie }) {
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Reviews</h2>
      <div className="row">
        {movie.reviews.map((review) => (
          <div className="col-12 col-md-6 col-lg-4" key={review.id}>
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}
