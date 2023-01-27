import React from 'react'
import SideNav from '../../Layouts/SideNav/SideNav'
import TopNav from '../../Layouts/TopBar/TopNav'

function Dashboard() {
  return (
    <div>
        <SideNav />
        <TopNav />


      <div className='dashboad'>
        <div className='dashboad__header'>

        </div>

        <div className='dashboad__info'>

        </div>

        <div className='dashboad__chart'>

        </div>
      </div>
    </div>
  )
}

export default Dashboard