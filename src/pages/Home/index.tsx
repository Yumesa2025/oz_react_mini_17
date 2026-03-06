
import { css } from "styled-system/css";
import MovieCardList from "../../components/common/MovieCardList";

const containerStyle = css({
    padding: "32px 80px",  
});

const Home = () => {
    return(
        <div className={containerStyle}>
            <MovieCardList/>
        </div>
    )
};

export default Home;