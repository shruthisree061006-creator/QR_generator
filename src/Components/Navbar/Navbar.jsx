import React from 'react'
import { Link , Outlet} from "react-router-dom"
import "./Navbar.css"
import logo from "../../assets/Shru's qrlogo.png";


export const Navbar = () => {
  return (
    <div>
        <nav className='container'>
            <div className='mainnav'>

            <div className='nav1'>
                <img src={logo} alt="QRlogo" id='logoimg1'  />
                <h2>SHRU's QR</h2>
            </div>

            <div className='nav2'>
                <h1><Link to="/">Home</Link></h1>
                <h1><Link to='/create'>Create</Link></h1>
                <h1><Link to='/history'>History</Link></h1>
                <h1><Link to='/about'>About</Link></h1>
            </div>
            
        </div>
            
    
        </nav>
        <Outlet></Outlet>



    </div>
    
  )
}
