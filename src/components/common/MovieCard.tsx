import type { Movie } from "../../types/movie";
import { css } from "styled-system/css";

interface MovieCardProps {
  movie: Movie;
}

const cardStyle = css({
  width: "160px",
  borderRadius: "8px",
  overflow: "hidden",
  border: "2px solid",
  borderColor: "orange.400",
  backgroundColor: "gray.900",
  cursor: "pointer",
  _hover: {
    transform: "scale(1.03)",
    transition: "transform 0.2s",
  },
});

const posterStyle = css({
  width: "100%",
  aspectRatio: "2/3",
  objectFit: "cover",
  backgroundColor: "gray.700",
  display: "block",
});

const infoStyle = css({
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

const titleStyle = css({
  fontSize: "13px",
  fontWeight: "bold",
  color: "white",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  alignSelf: "flex-start",
});

const ratingStyle = css({
  fontSize: "12px",
  color: "orange.400",
  alignSelf: "flex-end",
});

const MovieCard = ({ movie }: MovieCardProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className={cardStyle}>
      <img className={posterStyle} src={imageUrl} alt={movie.title} />
      <div className={infoStyle}>
        <p className={titleStyle}>{movie.title}</p>
        <p className={ratingStyle}>{movie.vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default MovieCard;