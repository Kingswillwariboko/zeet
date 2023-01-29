import React, {useState} from 'react'
import Button from '../../components/Button/Button'
import Password from '../../components/PasswordSettings/Password'
import Profile from '../../components/ProfileSettings/Profile'
import SideNav from '../../Layouts/SideNav/SideNav'
import TopNav from '../../Layouts/TopBar/TopNav'

import"./settings.scss"

const Settings = () => {
    const [settingMode, setSettingsMode] = useState(false)
  return (
    <div>
        <SideNav />
        <TopNav />

        <div className='settings'>
            <div className='settings__header'>
                    <h3>Settings</h3>

                    <div className='settings__header-btn'>
                        <button onClick={()=> setSettingsMode(false)}>Profile Settings</button>
                        <button onClick={()=> setSettingsMode(true)}>Password</button>
                    </div>
            </div>

            <hr/>

            <div>
                {settingMode ? <Password /> : <Profile /> }
            </div>
        </div>
    </div>
  )
}

export default Settings