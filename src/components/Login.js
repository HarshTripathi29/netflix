import React, { useRef } from 'react'
import Header from './Header'
import { useState} from 'react'
import { checkValidData} from '../utils/validate'
import {auth} from "../utils/firebase"
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const[isSignInForm, setSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(" ");

  // const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleButtonClick=()=>{
    // console.log(name.current.value);
  
  const message = checkValidData(email.current.value, password.current.value);
  setErrorMessage(message);

  if(!isSignInForm){
    // Sign up logic
    createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage);
    // ..
    });
  }

  else{
    //SignIn logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage)
    });
  }
  }

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
      onSubmit={(e)=>{e.preventDefault()}}
      className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-xl py-4 text-red'>
          {isSignInForm? "Sign In" : "Sign Up"}
        </h1>
        {
          !isSignInForm && 
          (
          <input 
          // ref = {name}
          type="text" 
          placeholder='Full Name' 
          className='p-4 my-4 w-full bg-gray-700 '/>
          )
        }
        <input 
          type="text" 
          ref = {email}
          placeholder='Email Address' 
          className='p-4 my-4 w-full bg-gray-700 '/>
        <input 
          ref = {password}
          type="password" 
          placeholder='Password' 
          className='p-4 my-4 w-full bg-gray-700'/>
        <p>{errorMessage}</p>
        <button 
          className='p-4 my-4 bg-red-600 w-full'
          onClick={handleButtonClick}>
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
