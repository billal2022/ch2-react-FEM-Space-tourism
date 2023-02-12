import React, {lazy} from 'react'
import { Route, Routes, useLocation } from 'react-router';
import {AnimatePresence }from "framer-motion"
/*lazy compo*/
const  Destination =  lazy(()=>import("../components/destination/Destination"))
const  Home = lazy(()=>import("../components/home/Home"))
const  Crew = lazy(()=>import("../components/crew/Crew"))
const  Technology = lazy(()=>import("../components/technology/Technology"))

function Animatedroutes() {
    const location = useLocation();
  return (
<AnimatePresence>
  <Routes location={location} key={location.pathname}>
  <Route  path='/ch2-react-FEM-Space-tourism' element={<Home />}> </Route>
  <Route path='/src/components/destination' element={<Destination />}> </Route>
  <Route path='/src/components/crew' element={<Crew />}> </Route>
  <Route path='/src/components/technology' element={<Technology  />}> </Route>
</Routes>  
</AnimatePresence>


  )
}

export default Animatedroutes