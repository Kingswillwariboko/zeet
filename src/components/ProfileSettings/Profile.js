import React from 'react' 
import avatar from "../../assets/Picture Frame.svg"


import "./profile.scss"

const Profile = () => {
  return (
    <div className='profile'>
        <div className='profile__one'>
            <h3>Profile Settings</h3>
            <p>Update your profile settings</p>
        </div>
         

        <div className='profile__two'>
            <div className='profile__two-img'>
                <img src={avatar} alt=""/>

                <p>Upload a new avatar. Allowed *.jpeg, *.jp, *.png</p>
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
    </div>
  )
}

export default Profile