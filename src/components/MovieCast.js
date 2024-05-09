import React from 'react'
import { IMG_URL_PATH } from '../utils/constants'

const MovieCast = ({photo, name}) => {

  return (
    <div className='my-2 mx-1 w-28 bg-red-500 text-neutral-300 text-1xl w-50 border-white'>
      <img 
        className=' h-44'
        src={IMG_URL_PATH+photo}/>
      <div>{name}</div>
    </div>
  )
}

export default MovieCast
