import React from 'react'
import { signOut } from "firebase/auth";
import {auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)
  const handleSignOut =()=>{
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      navigate("/");
    })
    .catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44 h-20'
        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" 
        alt="logo"
      />
      {user && (
        <div className='flex p-2'>
        <img 
          className='w-12 h-12'
          alt="user"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        />
        <button 
        className='font-bold text-white'
        onClick={handleSignOut}>SignOut</button>
      </div>
      )}
    </div>
  )
}

export default Header
