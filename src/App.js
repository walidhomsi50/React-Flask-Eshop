import React, { useState, useEffect } from 'react';
import MovieCard from './moviecard';
import searchIcon from './assets/icons/icons8-search.svg'
import './App.css';
//c6211840





function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const Api_Url = 'http://www.omdbapi.com/?i=tt3896198&apikey=c6211840';
  const fetchMovies = async (title) => {
    try{
    const response = await fetch(`${Api_Url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    }catch(exception){
      <h1>error while retrieving data</h1>
    }
  }

  useEffect(() => {
    fetchMovies();

  }, []);
useState('');
  console.log(movies);

  return (
    <div>
   
    <div className="App">
      <h1>Movies World</h1>
      <div className='search'>

        <input
          placeholder='search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className='search-icon'>
        <img src={searchIcon} onClick={()=>fetchMovies(searchTerm)} alt='movie img'/>
       </span>
      </div>

      { movies?.length > 0 ? (
          <div className='container'>

            {movies.map((movie)=>(
              <MovieCard  movie={movie}/>
            ))} 
          </div>


        ) : (
          <div className='empty'>
            <h2>No matches found!!</h2>
          </div>
        )

        }
    </div>
    
    </div>
    
    
  );
}

export default App;
