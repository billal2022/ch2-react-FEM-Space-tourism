
import { NavLink,Link } from 'react-router-dom';
import { useState } from 'react';


import "./Navbar.css"
import closeicon from "../../assets/shared/icon-close.svg"
import openicon from "../../assets/shared/icon-hamburger.svg"

import logo from "../../assets/shared/logo.svg"
export default function Navbar(){
  const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [menu_class, setMenuClass] = useState("navbar hidden")
    const [open, setopen] = useState("closeIcon open")
    
    const updateMenu = () => {
      if(!isMenuClicked) {
          setMenuClass("navbar visible")
          setopen("closeIcon close")
      }
      else {
          setMenuClass("navbar hidden")
          setopen("closeIcon open")
      }
      setIsMenuClicked(!isMenuClicked)
    }
  return (
  <>
<header> 
<Link  to={"/ch2-react-FEM-Space-tourism"} onClick={updateMenu}><img src={logo} alt='' /></Link>
<img onClick={updateMenu} src={openicon} className={open} alt="openLogo"/>
<ul  className={menu_class}>
  <li>
    <img onClick={updateMenu} src={closeicon} className="closeIcon" alt='closeLogo'/>
  </li>
 <li>
  <NavLink onClick={updateMenu}  to={'/ch2-react-FEM-Space-tourism'}> <span>00</span> HOME</NavLink>
 </li>
 <li>
   <NavLink onClick={updateMenu}  to={'/src/components/destination'}> <span>01</span> DESTINATION</NavLink>
 </li>
 <li>
  <NavLink onClick={updateMenu}  to={'/src/components/crew'}> <span>02</span> CREW</NavLink>
 </li>
 <li>
   <NavLink onClick={updateMenu}  to={'/src/components/technology' }><span>03</span> TECHNOLOGY</NavLink>
 </li>
</ul>
</header>




</>
  )
}


