import React, { useState, useEffect } from 'react';

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=bc3c83ba";
  
  const App = () =>{
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    searchMovies("spiderman");
      },[]);
      
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
 
  return (
   <div className="app">
<h1>Welcome to Movies!!</h1>

<div className="search">
  <input
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  placeholder="search for movies"
  />
  <img
  src={SearchIcon}
  alt="search"
  onClick={() => searchMovies(searchTerm) }
  />
</div>


{movies?.length > 0 ?(
<div className="container">{/*
  <MovieCard movie={movies[0]} /> */}

{movies.map((movie) => (
  <MovieCard movie={movie} />))}
  </div>
) : (
  <div className="empty">
   <h2>No Movies found</h2>
   </div>)};
</div>
   
  );
};

export default App;