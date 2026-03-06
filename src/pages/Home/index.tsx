
import { css } from "styled-system/css";
import MovieCardList from "../../components/common/MovieCardList";
import HeroBanner from "./components/HeroBanner";


const containerStyle = css({
    padding: "32px 80px",  
});

const Home = () => {
    return(
        <>
        <HeroBanner />
        <div className={containerStyle}>
            <MovieCardList/>
        </div>
        </>   
    )
};

export default Home;