import React from 'react'

const Password = () => {
  return (
    <div>
        <div className='profile__one'>
            <h3>Profile Settings</h3>
            <p>Update your profile settings</p>
        </div>


        <form>
                
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
        </form>

    </div>
  )
}

export default Password