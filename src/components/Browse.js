import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import {useSelector} from "react-redux";
import GptSearch from './GptSearch';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Footer from './Footer';

const Browse = () => {

  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
    <div className='flex-col'>
    <Header/>
    {
      showGptSearch? (<GptSearch/>): 
      (
        <>
        <MainContainer/>
        <SecondaryContainer/>
        <Footer/>
        </>
      )
    }
      
      </div>
    </div>
  )
}

export default Browse
