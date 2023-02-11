
import {crew} from "../../assets/crew"
import { useState } from 'react'
import "./Crew.css"
export default function Crew() {
  const [people] = useState(crew)
const [Link, setLink] = useState(0)
const {name,images,role,bio}= people[Link]
  return (
    < >
    <section className="main-section_crew">
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
    </section>
    
          </>
  )
}
