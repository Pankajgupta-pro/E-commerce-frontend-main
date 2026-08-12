import React, { useState } from "react" 
import "./Navbar.css"
 import logo from "../../assets/logo.jpg"
  import card_icon from "../../assets/card.jpg"


const Navbar = () => {
    const [menu , setmenu] = useState("home");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt=""  height="50px"/>
        <p>SwadeshCard</p>

      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setmenu("home")}}>Home{menu=="home" ? <hr/>:<></>}</li>
        <li onClick={()=>{setmenu("mens")}}>Men{menu=="mens" ? <hr/>:<></>}</li>
        <li onClick={()=>{setmenu("womens")}}>Women{menu=="womens" ? <hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}>Kids{menu=="kids" ? <hr/>:<></>}</li>
      </ul>

      <div className="nav-login-card">
        <button>Login</button>
        <img src={card_icon} alt="" height="40px" />
        <div className="nav-card-count">0</div>

      </div>
    </div>
  )
}

export default Navbar;