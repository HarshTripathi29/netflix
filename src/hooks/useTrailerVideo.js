import React from 'react';
import {useDispatch} from "react-redux";
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos= async()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+
    "/videos", 
    API_OPTIONS);
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video)=>video.type=="Trailer");
    const trailer = filterData.length?filterData[0] : json.results[0] ;
    // trailer may not be there
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(()=>{
    getMovieVideos();
  },[]);

}

export default useTrailerVideo
