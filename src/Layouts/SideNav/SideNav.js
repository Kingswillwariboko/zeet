import React from 'react'
import logo from "../../assets/Logo (1).svg"
import menu from "../../assets/Menu.svg"
import avatar from "../../assets/Avatar.svg"
import house from "../../assets/Firefly.svg"
import connect from "../../assets/vector.svg"
import set from "../../assets/set.svg"

import "./sidenav.scss"
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <div className='sidenav'>
        <div className='sidenav__header'>
            <img src={menu} alt="" />
            <img className='logo' src={logo} alt="" />
        </div>
        <div className='sidenav__info'>
             <img src={avatar} alt="" />

             <div className='sidenav__info-names'>
                <h4>Hudson Alvarez</h4>
                <p>#739002</p>
             </div>
        </div>

        <div className='sidenav__menu'>
        <Link to="/dashboard">
            <button>
              
                <img src={house} alt=""/>
                Dashboard
             
            </button>
        </Link>
        <Link to="/connect">
            <button>
              
                <img src={connect} alt=""/>
                Connect
              
            </button>
        </Link>
        <Link to="/settings">
            <button >
             
                <img src={set} alt=""/>
                Settings
              
            </button>
            </Link>
        </div>
    </div>
  )
}

export default SideNav