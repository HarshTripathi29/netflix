import React, { useRef } from 'react'
import Header from './Header'
import { useState, useEffect} from 'react'
import { checkValidData} from '../utils/validate'
import {auth} from "../utils/firebase"
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice";
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const[isSignInForm, setSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(" ");

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleButtonClick=()=>{

  const message = checkValidData(email.current.value, password.current.value);
  setErrorMessage(message);

  if(!isSignInForm){
    // Sign up logic
    createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      const{uid, email, displayName}=auth.currentUser;
      dispatch(
        addUser(
          {
            uid : uid,
            email : email,
            displayName : displayName,
          }
        )
      );
   
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.Message);
    });
    console.log(user);
    
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
          src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
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
          ref = {name}
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
          {isSignInForm? "New to netflix, Sign up now" : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  )
}

export default Login
