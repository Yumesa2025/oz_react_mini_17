import { css } from "styled-system/css";
import movieDetailData from "../../../moks/movieDetailData.json";

const posterStyle = css({
  width: "300px",
  borderRadius: "12px",
  objectFit: "cover",
});

const infoStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  flex: 1,
});

const headerStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const MovieInfo = () => {
  const movie = movieDetailData;
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const genreNames = (movie.genres ?? []).map((g) => g.name).join(" , ");

  return (
    <>
      {/* 왼쪽: 포스터 */}
      <img className={posterStyle} src={imageUrl} alt={movie.title} />

      {/* 오른쪽: 정보 */}
      <div className={infoStyle}>
        <h2 className={headerStyle}>{movie.title}</h2>
        <p>평점 {movie.vote_average}</p>
        <p>{genreNames}</p>
        <p>{movie.overview}</p>
      </div>
    </>
  );
};

export default MovieInfo;
