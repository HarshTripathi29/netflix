import React from 'react'
import { IMG_URL_PATH } from '../utils/constants'
import CardDetails from './CardDetails'
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const MovieCard = ({key, posterPath}) => {

  const details = useSelector((store)=>store.details);
  
  return (
    <div className='w-48 m-2'>
      <img  className="cursor-pointer" alt="movie card" src={IMG_URL_PATH + posterPath}/>
      
    </div>
  )
}

export default MovieCard
