import RatingStars from "./RatingStars";

export default function ReviewCard({ review }) {
  return (
    <div className="card h-100 p-4 shadow-sm border-0 review-card">
      <div className="d-flex flex-column align-items-center mb-3">
        <div className="review-avatar mb-2">{review.name[0].toUpperCase()}</div>
        <h5 className="mb-3 fw-semibold">{review.name}</h5>
        <small className="text-muted">
          <RatingStars vote={review.vote} maxVote={5} />
        </small>
      </div>
      <div className="text-center">
        <p className="fst-italic text-body">{review.text}</p>
      </div>
    </div>
  );
}
