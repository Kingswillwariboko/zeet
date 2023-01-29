import React,  {useState} from 'react'
import logo from "../../../assets/Logo (1).svg"
import Button from '../../../components/Button/Button';
import integration from "../../../assets/integration 1.svg"
import design from "../../../assets/up.svg"
import design2 from "../../../assets/down.svg"


import "./signup.scss"


function SignUp() {
    const [isChecked, setIsChecked] = useState(false);
  return (
    <div className='signup'>
       
        <div className='signup__desktop'>
            <div className='signup__desktop-one'>
               <img className='down' src={design} alt=""/>
               <img className='up' src={design2} alt=""/>
                <img src={integration} alt=""/>
            </div>

            <div className='signup__desktop-two' >
                <h3>One integration, <br />
                  multiple services.</h3>

                  <p>Seamless access to customers biodata and financial history in record time.</p>
            </div>
        </div>
        <div className='signup__mobile'>
            <div className='signup__mobile-msg'>
                    <img src={logo} alt=""/>
                    <h4>Welcome to ZeeH</h4>
                    <p>Let’s get you up and running with ZeeH insight</p>
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

                    <label>
                        <input type="checkbox" checked={isChecked} 
                        onChange={() => setIsChecked((prev) => !prev)}
                        />
                        <div className='lists'>
                          I agree to ZeeH’s terms and conditions and Privacy policy.
                        </div>
                    </label>

                    <p></p>
                    <Button>SignUp</Button>
            </form>

            <div className='signup__mobile-footer'>
               <p>Have an account?</p>
                <button>Sign in</button>
            </div>
        </div>
        
    </div>
  )
}

export default SignUp