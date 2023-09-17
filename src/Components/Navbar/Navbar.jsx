import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { getTopNav } from './NavData';
import CloseIcon from '@mui/icons-material/Close';



const Navbar = () => {
  const [navItems,setNavItems]= useState([])
  const [collapse,setCollapse]=useState("nav_menu")
  const [toggleIcon,setToggleIcon]= useState("toggler_icon")

useEffect(()=>{
  setNavItems(getTopNav());
},[]);

const onToggle=()=>{
  collapse === "nav_menu"?setCollapse("nav_menu nav_collapse")
  : setCollapse("nav_menu")

  toggleIcon==="toggler_icon"?setToggleIcon("toggler_icon toggle"):
  setToggleIcon("toggler_icon")
}
  return (
    <div className="navbar">
      <div className="wrapper">
      <Link className ="link" to="/"><img src="/Little-Lemon/images/c2.png" alt='' /></Link>
      <ul className={collapse}>
        {navItems.map((item)=>(
          <li key={item.id}><Link className ="link" to={item.to}>{item.Label}</Link></li>
        ))}
      </ul>
      <div className={toggleIcon} onClick={onToggle}>
      <MenuIcon className='icon'/>
      <CloseIcon className='icon2'/>
      </div>
      </div>
      
    </div>
  )
}

export default Navbar