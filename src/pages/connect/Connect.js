import React from 'react'
import BackAccounts from '../../components/banklaccountlists/BackAccounts'
import Button from '../../components/Button/Button'
import SideNav from '../../Layouts/SideNav/SideNav'
import TopNav from '../../Layouts/TopBar/TopNav'

import "./connect.scss"

function Connect() {
  return (
    <div>
        <SideNav />
        <TopNav />
        <div className='connect'>
            <div className='connect__header'>
                <div className='connect__header-one'>
                <h3>Connect</h3>
                <p>Banks connected (3)</p>
                </div>

                <Button className="connect-btn">
                    Link account
                </Button>
            </div>

          <hr/>

          <div>
            <BackAccounts />
          </div>
        </div>
    </div>
  )
}

export default Connect