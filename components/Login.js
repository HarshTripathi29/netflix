import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {

  const[isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm=()=>{
    setSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/> 
      <div className='absolute'>
        <img 
          src="https://img.goodfon.com/original/1920x1080/1/61/fon-netflix-logo-raduga-tsvet-fon-background-skachat-oboi-sk.jpg"
          alt="bg image"
        />
      </div>
      <form 
      className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-xl py-4 text-red'>
          {isSignInForm? "Sign In" : "Sign Up"}
        </h1>
        {
          !isSignInForm && 
          (
          <input 
          type="text" 
          placeholder='Full Name' 
          className='p-4 my-4 w-full bg-gray-700 '/>
          )
        }
        <input 
          type="text" 
          placeholder='Email Address' 
          className='p-4 my-4 w-full bg-gray-700 '/>
        <input 
          type="password" 
          placeholder='Password' 
          className='p-4 my-4 w-full bg-gray-700'/>
        <button 
          className='p-4 my-4 bg-red-600 w-full'>
          {isSignInForm? "Sign In" : "Sign Up"}
        </button>
        <p 
          className='p-4 my-4' 
          onClick={toggleSignInForm}>
          {isSignInForm? "New to netflix, Sign up now" : "Already signed in"}
        </p>
      </form>
    </div>
  )
}

export default Login
