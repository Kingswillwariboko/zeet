import React from 'react'
import phone from "../../../assets/amico.svg"
import Button from "../../../components/Button/Button"

import "./checkmail.scss"

function CheckMail() {
  return (
    <div className='mail'>
        <div className='mail__main'>
            <div className='mail__main-one'>
                <div>
                    <img src={phone} alt="" />

                    <h2>Check your mail</h2>
                    <p>We have sent your password recover 
                       instructions to your email</p>
                </div>

                <div>
                    <Button className="btn">Open mail app</Button>
                    <button className='skip-btn'>Skip, i’ll confirm later</button>
                </div>
            </div>

         <div className='mail__main-two'>
            <div className='footer-one'>
                    <p>Have an account?</p>
                    <button>Sign in</button>
            </div>

                <div className='footer-two'>
                    <p>©Zeeh Africa 2022</p>
                    
                    <p>Contact</p>
                    
                    <p>Privacy Policy</p>
                </div>
        </div>
            
        </div>

       
    </div>
  )
}

export default CheckMail