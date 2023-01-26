import React from 'react'
import logo from "../../assets/Logo (1).svg"
import Button from '../../components/Button/Button';

import "./forgetpassword.scss"

function ForgetPassword() {
  return (
    <div className='forgetpassword'>
        <div className='helper'>
        <div className='forgetpassword__mobile'>
            <div className='forgetpassword__mobile-msg'>
                    <img src={logo} alt=""/>
                    <h4>Reset your passwordd</h4>
                    <p>Enter the email associated with your account andwe’ll send you instructions to reset your password</p>
            </div>

            <form className='forgetpassword__form'>
                    <div className='forgetpassword__form-one'>
                        <label htmlFor='email'>Email</label>
                        
                        <input 
                        placeholder='johndoe@gmail.com'
                        id="email"
                        />
                    </div>
                    <Button type="submit">Continue</Button>
            </form>

            <div className='forgetpassword__mobile-footer'>
                <button>Return to loginn</button>
            </div>
        </div>

        <div className='forgetpassword__footer'>
            <div className='forgetpassword__footer-one'>
               <p>Have an account?</p>
                <button>Sign in</button>
            </div>
        </div>
        </div>
</div>
  )
}

export default ForgetPassword