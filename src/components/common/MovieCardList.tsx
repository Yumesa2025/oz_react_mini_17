import MovieCard from "./MovieCard";
import movieListData from "../../moks/movieListData.json";
import type { Movie } from "../../types/movie";
import { css } from "styled-system/css";

const gridStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "24px",
});

const MovieCardList = () => {
  const movies = movieListData.results as Movie[];
  return (
    <div className={gridStyle}>
      {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default MovieCardList;
