import React from 'react'
import logo from "../../../assets/Logo (1).svg"
import Button from '../../../components/Button/Button';
import design from "../../../assets/up.svg"
import design2 from "../../../assets/down.svg"

import "./newpassword.scss"

function NewPassword() {
  return (
    <div className='newpassword'>
        <img className='down' src={design} alt=""/>
        <img className='up' src={design2} alt=""/>
    <div className='helper'>
        <div className='newpassword__mobile'>
            <div className='newpassword__mobile-msg'>
                    <img src={logo} alt=""/>
                    <h4>Create new password</h4>
                    <p>Your new password must be different from your previous used passwords</p>
            </div>

            <form className='newpassword__form'>
                    <div className='newpassword__form-one'>
                        <label htmlFor='email'>Password</label>
                        
                        <input 
                        placeholder='at least 8 characters'
                        id="email"
                        />
                    </div>

                    <div className='newpassword__form-one'>
                        <label htmlFor='email'>Confirm Password</label>
                        
                        <input 
                        placeholder='at least 8 characters'
                        id="email"
                        />
                    </div>
                    <Button className="newpassword__form-btn" type="submit">Reset Password</Button>
            </form>

            <div className='newpassword__mobile-footer'>
                <button>Return to loginn</button>
            </div>
        </div>

        <div className='newpassword__footer'>
                <div className='newpassword__footer-two'>
                    <p>©Zeeh Africa 2022</p>
                    
                    <p>Contact</p>
                    
                    <p>Privacy Policy</p>
                </div>
        </div>
    </div>
</div>
  )
}

export default NewPassword