import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom' 

const Body = () => {

  return (
    <div>
     <Router>
        <Routes>
            <Route path="/" element=<Login/> />
            <Route path="/Browse"element=<Browse/> />
        </Routes>
    </Router>

    </div>
  )
}

export default Body
