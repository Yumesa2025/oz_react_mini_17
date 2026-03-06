import type { Movie } from "../../../types/movie";
import movieListData from "../../../moks/movieListData.json";
import { css } from "styled-system/css";
import { useState, useEffect } from "react";

const bannerStyle =css ({
    position: "relative",
    width: "100%",
    height: "500px",
    overflow: "hidden",
});

const bgImageStyle = css ({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top 10%",
});

const overlayStyle = css({
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, rgba(0,0,0,0.85) 40%, transparent 100%)",
});

const textAreaStyle = css({
  position: "absolute",
  bottom: "60px",
  left: "80px",
  maxWidth: "500px",
});

const titleAreaStyle = css({
  fontSize: "36px",
  fontWeight: "bold",
  color: "white",
  marginBottom: "12px",
});

const overviewStyle = css({
  fontSize: "14px",
  color: "gray.300",
  lineHeight: "1.7",
  display: "-webkit-box",
  overflow: "hidden",
  WebkitLineClamp: "3",      
});

const ratingStyle  = css({
    fontSize: "14px",
    color: "orange.400",
    marginBottom: "8px",  
});



const HeroBanner = () => {
    const movies = movieListData.results as Movie[];
    const [currentIndex, setCurrenIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(()=>{
            setCurrenIndex((prev)=> (prev+1) % movies.length);
        }, 5000);
        return () => clearInterval(timer);
    });
    
    const bannerMovie = movies[currentIndex];
    const bannerMovieUrl = `https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path}`;

    return(
        <div className={bannerStyle}>
            <img className={bgImageStyle} src={bannerMovieUrl} alt={bannerMovie.title} />
            <div className={overlayStyle} />
            <div className={textAreaStyle}>
                <p className={ratingStyle}> {bannerMovie.vote_average.toFixed(1)}</p>
                <h1 className={titleAreaStyle}>{bannerMovie.title}</h1>
                <p className={overviewStyle} style={{ WebkitBoxOrient: "vertical" }}>
                    {bannerMovie.overview}
                </p>
            </div>
        </div>
    );

};

export default HeroBanner;