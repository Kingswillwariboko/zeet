import React from 'react'
import SearchBar from '../../components/Search/SearchBar'
import avatar from "../../assets/Avatar.svg"
import notify from "../../assets/IconButton.svg"

import "./topnav.scss"

function TopNav() {
  return (
    <div className='topnav'>

        <div className='topnav__search'>
           <SearchBar />
        </div>


        <div className='topnav__notify'>
            <img src={notify} alt=""/>
            <img src={avatar} alt=""/>
        </div>
    </div>
  )
} 

export default TopNav