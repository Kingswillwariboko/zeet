import React from 'react'
import search from "../../assets/search.svg"

import "./searchbar.scss"
function SearchBar({className}) {
  return (
    <form className={`searchbar__form ${className}`}>
        <img src={search} alt=""/>
        <input
            placeholder='Search' 
        />
    </form>
  )
}

export default SearchBar