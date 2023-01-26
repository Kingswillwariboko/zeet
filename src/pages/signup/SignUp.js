import React from 'react'
import logo from "../../assets/Logo (1).svg"
import Button from '../../components/Button/Button';


import "./signup.scss"


function SignUp() {
  return (
    <div className='signup'>
        <div className='signup__desktop'>

        </div>

        <div className='signup__msg'>
                <img src={logo} alt=""/>
                <h4>Hi, Welcome Back</h4>
        </div>

        <form className='signup__form'>
                <div className='signup__form-one'>
                    <label htmlFor='email'>Email</label>
                    
                    <input 
                    placeholder='johndoe@gmail.com'
                    id="email"
                    />
                </div>


                <div className='signup__form-one'>
                    <label htmlFor='password'>Password</label>
                    <input 
                    placeholder='at least 8 characters'
                    id="password"
                    />
                </div>

                <div className='signup__form-one'>
                    <label htmlFor='email'>Email</label>
                    
                    <input 
                    placeholder='johndoe@gmail.com'
                    id="email"
                    />
                </div>
        </form>

        <div className='signup__footer'>
                <p>Don’t have an account?</p>
                <button>SignUp</button>
        </div>
    </div>
  )
}

export default SignUp