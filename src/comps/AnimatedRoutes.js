import React from 'react'
import '../App.css';
import { BrowserRouter,Routes,Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Games from './Games';
import {AnimatePresence} from 'framer-motion'



function AnimatedRoutes() {
const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={< Home />}/>
            <Route path="games" element={< Games />}/>
        </Routes>
    </AnimatePresence>

  )
}

export default AnimatedRoutes