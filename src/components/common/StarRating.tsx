interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const fill = Math.round(rating);
  const empty = 10 - fill;
  return <p>{"⭐".repeat(fill)}{"☆".repeat(empty)}</p>;
};

export default StarRating;