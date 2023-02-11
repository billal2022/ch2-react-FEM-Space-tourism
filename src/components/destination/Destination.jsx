
import "./Destination.css"
import {destination} from "../../assets/destination"
import { useState } from 'react'

export default function Destination() {
  const [planets] = useState(destination)
  const [value, setValue] = useState(0)

  const { name, images, description, distance, travel } = planets[value]

  return (
    < >
<section className="main-section">
<div className="left__section">
   <h1><span>01</span>PICK YOUR DESTINATON</h1>
      <img className="rotating" src={images} alt={name} title={name} />
   </div>
   <div className="right__section">
   {planets.map((item,index)=>(
<button className={index===value && "active" } key={index} onClick={()=>setValue(index)}>{item.name}</button>
      ))}
      <h1 className="p-big">{name}</h1>
      <p className="p">{description}</p>
      <div className="right__section-bottom">
        <div>
          <p className="right__section-bottom-p">AVG. DISTANCE</p>
          <h1 className="right__section-bottom-h">{distance}</h1>
          </div>
        <div>
        <p className="right__section-bottom-p">EST. TRAVEL TIME</p>
          <h1 className="right__section-bottom-h ">{travel}</h1>
        </div>
      </div>
   </div>
</section>

      </>
  )
}
