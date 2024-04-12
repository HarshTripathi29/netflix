import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addCast } from '../utils/cardDetailsSlice';

const useCast = () => {

    const dispatch = useDispatch();

    const getCast=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/929590/credits?language=en-US', API_OPTIONS)
        const json = await data.json();
        dispatch(addCast(json));
    }

    useEffect(()=>{
        getCast();
    },[]);
  return (
   <>

   </>
  )
}

export default useCast
