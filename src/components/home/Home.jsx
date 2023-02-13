import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
import {motion as m}from "framer-motion"
export default function Home() {
  return (
   <>
    
    <m.div
      initial={{translateY:"100vh"}}
      animate={{translateY:"0vh"}}
      exit={{translateY:"100vh"}}
    transition="1"
    className="home-section">
   <section className="left-home p-small">
     <h2 className="home-left-title">So, you want to travel to</h2>
     <h1 className='p-big'>SPACE</h1>
     
     <p >
     Let’s face it; if you want to go to space, you might as well genuinely go to 
     outer space and not hover kind of on the edge of it. Well sit back, and relax 
     because we’ll give you a truly out of this world experience!
   </p>
   
   </section>
   
     <div className="right-home">
       <button ><Link className='p-big' to={"/src/components/destination"}>Explore</Link></button>
     </div>
 </m.div>
 </>
  )
}
