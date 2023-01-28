import React from 'react'
import Button from '../../components/Button/Button'
import Profile from '../../components/ProfileSettings/Profile'
import SideNav from '../../Layouts/SideNav/SideNav'
import TopNav from '../../Layouts/TopBar/TopNav'

import"./settings.scss"

const Settings = () => {
  return (
    <div>
        <SideNav />
        <TopNav />

        <div className='settings'>
            <div className='settings__header'>
                    <h3>Settings</h3>

                    <div className='settings__header-btn'>
                        <button>Profile Settings</button>
                        <button>Password</button>
                    </div>
            </div>

            <hr/>

            <div>
                <Profile />
            </div>
        </div>
    </div>
  )
}

export default Settings