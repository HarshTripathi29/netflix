import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import {auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged} from "firebase/auth";
import {addUser, removeUser} from "../utils/userSlice";
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {

const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector((store)=>store.user)

  const handleSignOut =()=>{
    signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid, email, displayName} = user;
        dispatch(addUser({uid : uid, email: email, displayName : displayName}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe the events when the component unmounts
    return ()=> unSubscribe(); 
  },[])

  const handleGptSearchClick = () =>{
    dispatch(toggleGptSearchView());
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-bottom from-black z-10 flex justify-between'>
      <img className='w-44 h-20'
        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" 
        alt="logo"
      />
      {user && (
        <div className='flex p-2'>

        <button 
          onClick={handleGptSearchClick}
          className='px-4 my-2 mx-4 h-12 bg-red-500 text-white rounded-lg'>
          GPTSearch
        </button>
        <img 
          className='w-12 h-12 py-2 my-2 '
          alt="user"
          src="https://cdn-icons-png.freepik.com/512/6406/6406635.png"
        />
        <button 
        className='px-4 my-2 mx-4 h-12 bg-red-500 text-white rounded-lg'
        onClick={handleSignOut}>SignOut</button>
      </div>
      )}
    </div>
  )
}

export default Header
