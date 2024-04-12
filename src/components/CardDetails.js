import React, { useEffect } from 'react'
import { API_OPTIONS, IMG_URL_PATH } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addCardDetails } from '../utils/cardDetailsSlice';
import {useParams} from "react-router-dom";

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

  const details = useSelector((store)=>store.details);

  return(
    details.cardDetails && (
    <div className='flex'>
        <div className='m-10 justify-items-start'>
            <div className='text-6xl'>{details.cardDetails.original_title}</div>

            <div>{details.cardDetails.tagline}</div>

            <div>{details.cardDetails.genres.map((genre)=>(
              genre.name + " "
            ))}</div>

            <div><h2>Overview</h2> {details.cardDetails.overview}</div>

            <div>{details.cardDetails.original_language}</div>

            <div>{details.cardDetails.status}</div>
            <div>{details.cardDetails.release_date}</div>
            </div>
            <div>
            <img 
              className='p-10'
              src={IMG_URL_PATH + details.cardDetails.backdrop_path}/>
        </div>
    </div>
  )
)
}

export default CardDetails
