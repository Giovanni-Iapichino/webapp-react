import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function RatingStars({ vote, maxVote = 5 }) {
  const stars = [];

  for (let i = 1; i <= maxVote; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={i <= vote ? solidStar : regularStar}
        className={i <= vote ? "text-warning me-1" : "text-muted me-1"}
      />
    );
  }

  return <div className="d-flex justify-content-center">{stars}</div>;
}
