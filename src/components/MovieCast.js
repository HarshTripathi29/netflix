import React from 'react'
import { IMG_URL_PATH } from '../utils/constants'

const MovieCast = ({photo, name}) => {

  return (
    <div className='my-5 mx-1 w-28 bg-black text-white w-50 text-2xl border-white'>
      <img 
        className=' h-44'
        src={IMG_URL_PATH+photo}/>
      <div>{name}</div>
    </div>
  )
}

export default MovieCast
