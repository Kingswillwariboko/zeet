import React from 'react'
import Button from '../Button/Button'

import "./password.scss"

const Password = () => {
  return (
    <div className='password'>
        <div className='password__one'>
            <h3>Profile Settings</h3>
            <p>Update your profile settings</p>
        </div>


        <form>
                <div className='form'>
                <div className='form-one'>
                    <div className='one'>
                        <label htmlFor='email'>Email</label>
                        
                        <input 
                        placeholder='johndoe@gmail.com'
                        id="email"
                        />
                    </div>

                    <div className='one'>
                        <label htmlFor='email'>Email</label>
                        
                        <input 
                        placeholder='johndoe@gmail.com'
                        id="email"
                        />
                    </div>
                </div>

                <div className='form-one'>
                    <div className='one'>
                        <label htmlFor='email'>Email</label>
                        
                        <input 
                        placeholder='johndoe@gmail.com'
                        id="email"
                        />
                    </div>
                </div>

                </div>
                <Button className="form-btn">Update Password</Button>
        </form>

    </div>
  )
}

export default Password