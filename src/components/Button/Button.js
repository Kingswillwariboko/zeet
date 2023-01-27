import React from 'react'

import "./buttton.scss"

function Button({children, className}) {
  return (
    <button className={`button ${className}`}>
        {children}
    </button>
  )
}

export default Button