import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",background:"light",color:"black",padding:"30px 1px",marginBottom:"50px"}}>

        <Link to={"/"}>
            <h1>KALVIUM <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" /></h1>
        </Link>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <Link to="/about">
            <h1 style={{margin:"0 50px"}}>About</h1>
            </Link> 
            <Link to="/contact">
                <h1>Contact</h1>
            </Link>
        </div>
        
    </div>
  )
}

export default Navbar