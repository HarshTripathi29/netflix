import React from 'react';
import {useSelector} from "react-redux";
import MovieList from './MovieList';

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies)

  console.log(movies);
  return (movies.nowPlayingMovies && movies.popularMovies && movies.topRatedMovies && movies.upcomingMovies && (
    <div className=' bg-neutral-900 w-screen'>
    <div className=' mx-16'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
    </div>
    </div>
  ))
}

export default SecondaryContainer
