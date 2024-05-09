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

  const cast = useSelector((store)=>store.details);
  return(
    details.cardDetails && (
      <div className="font-mono ">
    <div className='flex bg-neutral-900 text-white w-screen overflow-hidden'>
    <div className='flex justify-center ml-8 items-center bg-neutral-900 w-1/4 '>
            <img 
              className='w-3/4 ml-4 h-3/4 border-2 border-neutral-700'
              src={IMG_URL_PATH + details.cardDetails.backdrop_path}/>
        </div>
        <div className='flex flex-col items-start m-10 p-5 w-2/4 border-white '>
        
            <div className='text-3xl font-extrabold text-red-500'>{details.cardDetails.original_title}</div>
            <div className='text-2xl py-2 text-red-500'>{details.cardDetails.tagline}</div>
            <div className='w-1/6 flex'>
              {details.cardDetails.genres.map((genre)=>(
                <div className='m-1 bg-red-500 h-8 p-1 text-neutral-900'>
                  {genre.name + " "}
                </div>
              ))}
            </div>
            <div className='flex flex-col items-start text-left text-1xl py-5 '>
              <h2 className="font-bold">Overview : </h2><br/>
              {details.cardDetails.overview}
            </div>
            <div className='border-b-2 border-neutral-600'> Language : {details.cardDetails.original_language}</div>
            <div className='border-b-2 border-neutral-600'> Status : {details.cardDetails.status}</div>
            <div className='border-b-2 border-neutral-600'>Release Date : {details.cardDetails.release_date}</div>
            </div>
            
    </div>
    <div className='bg-neutral-900'>
    <div className='text-3xl bg-neutral-900 font-bold text-left mx-20 text-red-500'>Movie Cast</div>
   <div className='flex overflow-x-scroll bg-neutral-900 text-1xl text-neutral-300 mx-20'>
   
   <div className='flex'>
    {
      cast.movieCast.cast.map((casts)=>(
        <MovieCast name={casts.original_name} photo={casts.profile_path}/>
    )
    )
    }
   </div>
   </div>
    </div>
    </div>
  )
)
}

export default CardDetails
