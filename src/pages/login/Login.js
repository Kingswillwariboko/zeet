import React from 'react'
import logo from "../../assets/Logo (1).svg"
import Button from '../../components/Button/Button';
import design from "../../assets/Design.svg"

import "./login.scss"

function Login() {
  return (
    <div className="login">
        <img className='design' src={design} alt=""/>
        <div className="login__main">
            <div className="login__main-msg">
                <img src={logo} alt=""/>
                <h4>Hi, Welcome Back</h4>
            </div>

            <form className="login__main-form">
                <div className='one'>
                    <label htmlFor='email'>Email</label>
                    
                    <input 
                    placeholder='johndoe@gmail.com'
                    id="email"
                    />
                </div>


                <div className='one'>
                    <label htmlFor='password'>Password</label>
                    <input 
                    placeholder='at least 8 characters'
                    id="password"
                    />
                </div>

                <div className='two'>
                    <p>Remember me</p>
                    <button>Forgot password?</button>
                </div>

            
                <Button type="submit" >Sign in</Button>
            </form>

            <div className="login__main-footer">
                <p>Don’t have an account?</p>
                <button>SignUp</button>
            </div>
        </div>
        <img className='design2' src={design} alt=""/>
    </div>
  )
}

export default Login;