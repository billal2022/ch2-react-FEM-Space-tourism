
import {crew} from "../../assets/crew"
import { useState } from 'react'
import {motion }from "framer-motion"
import "./Crew.css"
export default function Crew() {
  const [people] = useState(crew)
const [Link, setLink] = useState(0)
const {name,images,role,bio}= people[Link]
  return (

    <motion.section 
    className="main-section_crew"
    initial={{translateY:"100vh"}}
    animate={{translateY:"0vh"}}
    exit={{translateY:"100vh"}}
  transition="1"
    >
    <div className="left__section">
       <h1><span>02</span>MEET YOR CREW</h1>
        <h2 className="p-big">{role}</h2>
        <h1 className="p-big">{name}</h1>
        <p className="p">{bio}</p>
<div className="btn">        {crew.map((ind,index)=>(
<button className={index===Link && "active" } key={index} onClick={()=>setLink(index)}></button>
      ))}</div>
       </div>
       <div className="right__section">
<img src={images} alt={name} title={name} />
       </div>
    </motion.section>
  
  )
}
