import { css } from "styled-system/css";
import MovieInfo from "./components/MovieInfo";

const containerStyle = css({
  display: "flex",
  gap: "32px",
  padding: "32px",
});

const MovieDetail = () => {
  return (
    <div className={containerStyle}>
      <MovieInfo />
    </div>
  );
};
export default MovieDetail;