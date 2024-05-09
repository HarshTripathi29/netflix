import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addCast } from '../utils/cardDetailsSlice';
import { useParams } from 'react-router-dom';

const useCast = () => {

    const dispatch = useDispatch();

    const movieId = useParams();
    console.log(movieId.movieId);
    const id = movieId.movieId;
    const getCast=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/credits?language=en-US', API_OPTIONS)
        const json = await data.json();
        console.log(json);
        dispatch(addCast(json));
    }

    useEffect(()=>{
        getCast();
    },[]);
 
}

export default useCast
