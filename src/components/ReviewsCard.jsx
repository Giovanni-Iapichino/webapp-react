export default function ReviewCard({ review }) {
  return (
    <div className="card h-100 text-center p-2 d-flex align-items-center">
      <div className="mb-2">
        <div className="avatar mx-auto mb-2">
          {review.name[0].toUpperCase()}
        </div>
        <div>
          <strong>{review.name}</strong>
        </div>
        <div>
          <strong>Vote: {review.vote}</strong>
        </div>
      </div>
      <div>
        <p>
          <em>{review.text}</em>
        </p>
      </div>
    </div>
  );
}
