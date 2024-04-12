import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom' 
import CardDetails from './CardDetails'

const Body = () => {

  return (
    <div>
     <Router>
        <Routes>
            <Route path="/" element=<Login/> />
            <Route path="/Browse" element=<Browse/> />
            <Route path='/Browse/:movieId' element=<CardDetails/>/>
        </Routes>
    </Router>

    </div>
  )
}

export default Body
