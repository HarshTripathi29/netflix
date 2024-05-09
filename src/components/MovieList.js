import React from 'react'
import MovieCard from './MovieCard'
import {Link} from "react-router-dom"

const MovieList = ({title, movies}) => {

  return (
    <div className='bg-neutral-900'>
    <div className='text-2xl font-bold p-2 pt-16 text-red-500 text-left'>{title}</div>
    <div className='flex overflow-x-scroll'>
    <div className='flex'>
    {movies.map((movie)=>(
      <Link to={"/browse/"+movie.id}>
      <MovieCard key={movie.id} posterPath = {movie.poster_path} name={movie.title}/>
      </Link>
    ))
    }
    </div>
    </div>
    </div>
  )
}

export default MovieList
