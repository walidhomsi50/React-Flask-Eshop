import React from "react";

import './moviecard.css';



const Moviedet=({movie})=>{
  


    return(<div className='movie'>
    <div>
      <h3>{movie.Year}</h3>
    </div>

    <div>
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
      alt={movie.Title} ></img>
    </div>
    <div>
      <span>{movie.Type}</span>
      <h3>{movie.Title}</h3>
    </div>
  </div>
    )

}
  export default Moviedet;


