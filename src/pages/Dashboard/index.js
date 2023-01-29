import React from 'react'
import SideNav from '../../Layouts/SideNav/SideNav'
import TopNav from '../../Layouts/TopBar/TopNav'
import cards from "../../assets/checks.svg"
import yearsales from "../../assets/YearlySales.svg"
import chart from "../../assets/ReservationStats.svg"
import down from "../../assets/Vector 5.svg"
import calender from "../../assets/Calendar_Days.svg"


import "./dashboard.scss"
function Dashboard() {
  return (
    <div>
        <SideNav />
        <TopNav />
      <div className='dashboard'>
          <div className='dashboard__header'>
            <div className='dashboard__header-one'>
              <h3>Welcome back!</h3>
              <p>Get an insight to your finances</p>
            </div>

            <div className='dashboard__header-two'>
            Filter by
            <div className='filter'>
              <img src={calender} alt=""/>
              <p>Last 30 days</p>
              <img src={down} alt=""/>
            </div>
            </div>
          </div>

          <hr/>

          <div className='dashboard__info'>
            <div className='dashboard__info-one'>
              <div className='image'>
                <img src={cards} alt=""/>
              </div>

              <div>
                <h2>₦8000.00</h2>
                <p>Affordability</p>
              </div>
            </div>

            <div className='dashboard__info-two'>
            <div className='image'>
                <img src={cards} alt=""/>
              </div>
              <div className='price'>
                <h2>₦8000.00</h2>
                <p>Affordability</p>
              </div>
            </div>

            <div className='dashboard__info-three'>
            <div className='image'>
                <img src={cards} alt=""/>
              </div>

              <div>
                <h2>₦8000.00</h2>
                <p>Affordability</p>
              </div>
            </div>
          </div>

          <div className='dashboard__chart'>
             <div className='dashboard__chart-one'>
                <img src={yearsales} alt=""/>  {/*This image is definitely having it own component*/ }
             </div>

             <div className='dashboard__chart-two'>
                <img src={chart} alt=""/>  {/*This image is definitely having it own component*/ }
             </div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard