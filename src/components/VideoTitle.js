import React from 'react'

const VideoTitle = ({
    title,
    overview
}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-t from-neutral-900'>
    <div className='flex flex-col content-end w-2/6 text-left'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-2 text-lg font-sans'>{overview}</p>
      <div className='my-4'>
      <button className='bg-neutral-900 h-8 w-20 text-neutral-300 text-xl rounded-lg font-bold  hover:bg-opacity-50 hover:text-black'>Play</button>
      <button className='mx-2 bg-neutral-700 h-8 w-20 text-neutral-900 text-lg bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
    </div>
  )
}

export default VideoTitle
