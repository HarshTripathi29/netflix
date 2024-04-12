import React from 'react'
import { useRef } from 'react'
import {useSelector} from "react-redux"
import openai from '../utils/openai'

const GptSearchBar = () => {

const searchText = useRef(null);

const handleGptSearchClick=async()=>{

    console.log(searchText.current.value);
    const gptResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
      });

      console.log(gptResult.choices)
}

  return (
    <div>
      <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'
            onSubmit={(e)=>e.preventDefault()}>
            <input 
            ref = {searchText}
            type="text" 
            placeholder="What would you like to watch today?" 
            className='p-4 m-4 col-span-9'/>
            <button
            className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
            onClick={handleGptSearchClick}>search
            </button>
        </form>
      </div>
    </div>
  )
}

export default GptSearchBar
