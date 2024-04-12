import React from 'react'
import MovieCard from './MovieCard'
import {Link} from "react-router-dom"

const MovieList = ({title, movies}) => {

  return (
    <div className='px-6 bg-black'>
    <div className='text-3xl py-4 text-white'>{title}</div>
    <div className='flex overflow-x-scroll'>
    <div className='flex'>
    {movies.map((movie)=>(
      <Link to={"/browse/"+movie.id}>
      <MovieCard key={movie.id} posterPath = {movie.poster_path}/>
      </Link>
    ))
    }
    </div>
    </div>
    </div>
  )
}

export default MovieList
