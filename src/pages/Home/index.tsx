import MovieCard from "../../components/common/MovieCard";
import movieListData from "../../moks/movieListData.json";
import type { Movie } from "../../types/movie";
import { css } from "styled-system/css";

const containerStyle = css({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: "16px",
    padding: "16px",
});

const Home = () => {
    const movies = movieListData.results as Movie[];

    return (
        <div className={containerStyle}>
            {movies.map((movie) => ( <MovieCard key={movie.id} movie={movie} />))}
        </div>
    )
};

export default Home;