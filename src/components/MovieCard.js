import React from 'react'
import { IMG_URL_PATH } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 m-2'>
      <img alt="movie card" src={IMG_URL_PATH + posterPath}/>
    </div>
  )
}

export default MovieCard
