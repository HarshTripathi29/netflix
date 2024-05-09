import React from 'react'
import { IMG_URL_PATH } from '../utils/constants'
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const MovieCard = ({key, posterPath, name}) => {

  const details = useSelector((store)=>store.details);
  
  return (
    <div className='w-40 h-72 m-2'>
      <img  className="cursor-pointer h-60" alt="movie card" src={IMG_URL_PATH + posterPath}/>
      <div className='bg-neutral-900 h-12 text-left text-neutral-300 font-bold'>{name}</div>
    </div>
  )
}

export default MovieCard
