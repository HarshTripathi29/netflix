import React from 'react'
import {useSelector} from "react-redux"
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
    // getting the movies data from the store.
    
    if(!movies) return;

    const mainMovie = movies[0];

    console.log(mainMovie);

    const {original_title, overview, id} = mainMovie;
    
  return (
    <div className='bg-neutral-800'>
    <div className=''>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId = {id}/>
    </div>
    </div>
  )
}

export default MainContainer
