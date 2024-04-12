import React, { useEffect } from 'react'
import { API_OPTIONS, IMG_URL_PATH } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addCardDetails } from '../utils/cardDetailsSlice';
import {useParams} from "react-router-dom";
import useCast from '../hooks/useCast';
import MovieCast from './MovieCast';

const CardDetails = () => {

const {movieId} = useParams();
console.log(movieId);
const dispatch = useDispatch();

const getCardDetails = async()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"?language=en-US", API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addCardDetails(json));  
}
    useEffect(()=>{
        getCardDetails();
    },[]);

  const movieCast = useCast();
    
  const details = useSelector((store)=>store.details);

  const cast = useSelector((store)=>store.details.movieCast.cast);
  return(
    details.cardDetails && (
      <>
    <div className='flex justify-start bg-black text-white w-screen overflow-hidden'>
        <div className='m-10 p-5 w-3/4 border-white '>
            <div className='text-5xl'>{details.cardDetails.original_title}</div>

            <div className='text-3xl py-2'>{details.cardDetails.tagline}</div>

            <div className='w-1/6 flex-row'>
              {details.cardDetails.genres.map((genre)=>(
                <div className='my-1 bg-white text-red-700'>
                  {genre.name + " "}
                </div>
              ))}
            </div>

            <div className='text-1xl py-5'><h2>Overview : </h2><br/>{details.cardDetails.overview}</div>
            <div> Language : {details.cardDetails.original_language}</div>
            <div> Status : {details.cardDetails.status}</div>
            <div>Release Date : {details.cardDetails.release_date}</div>
            </div>
            <div>
            <img 
              className='w-150 m-10 p-5 border-white'
              src={IMG_URL_PATH + details.cardDetails.backdrop_path}/>
        </div>
    </div>
    <div className='text-4xl bg-black text-white'>Movie Cast</div>
   <div className='flex overflow-x-scroll bg-black text-4xl text-white border-white'>
   
   <div className='flex'>
    {
      cast.map((casts)=>(
        <MovieCast name={casts.original_name} photo={casts.profile_path}/>
    )
    )
    }
   </div>
   </div>
    </>
  )
)
}

export default CardDetails
