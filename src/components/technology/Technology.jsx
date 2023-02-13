import React from 'react'
import { useState } from 'react'
import {technology} from "../../assets/technology"
import "./Technology.css"
import {motion }from "framer-motion"
export default function Technology() {
  const [rockets] = useState(technology)
  const [value, setValue] = useState(0)

  const { name, images, description } = rockets[value]
  return (
    <>
      <motion.section 
      className='main-section-technology'
      initial={{translateY:"100vh"}}
      animate={{translateY:"0vh"}}
      exit={{translateY:"100vh"}}
    transition="1"
      >
               <div className="left__section">
       <h1 className='left__section'><span>03</span>SPACE LAUNCH</h1>
<div className='left__section-content'>
<div className='left__section-content-btns'>
{rockets.map((none,index)=>(
<button className={index===value && "active"  } key={index} onClick={()=>setValue(index)}>{index+1}</button>
      ))}
</div>
      <div className='left__section-content-desc'>
  <h3>the technology</h3>
<h1>{name}</h1>
<p>{description}</p>
      </div>
</div>
       </div>

       <div className='right__section'>
        <picture>
          <source media="(max-width:992px )" srcSet={images.landscape} />
        <img src={images.portrait} alt={name} title={name} />
        </picture>
       </div>
      </motion.section>

    </>
  )
}
