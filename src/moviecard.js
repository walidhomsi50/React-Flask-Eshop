import React from "react";
//import { useNavigate } from "react-router-dom";

import "./moviecard.css";

const MovieCard = ({ movie }) => {
  //const navigate=useNavigate();

  const goTomovieDetails = () => {
    //navigate('/moviedet');
  };

  return (
    <div className="movie" onClick={goTomovieDetails}>
      <div>
      <h3>{movie.Year}</h3>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        ></img>
      </div>
      <div className='movie-description'>
        <span>
        <h3>{movie.Title}</h3>
        </span>
      </div>
    </div>
  );
};
export default MovieCard;
