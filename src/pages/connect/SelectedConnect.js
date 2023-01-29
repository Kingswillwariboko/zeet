import React from 'react'
import SideNav from '../../Layouts/SideNav/SideNav'
import TopNav from '../../Layouts/TopBar/TopNav'
import Button from '../../components/Button/Button'
import gtb from "../../assets/guaranty_trust_bank 1.svg"
import first from "../../assets/Frame 200.svg" 
import second from "../../assets/Frame 120.svg"

const SelectedConnect = props => {
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

      <div className='connect__gtb'>
          <img src={gtb} alt="" />
          <p>GTBank</p>
      </div>


      <div className='connect__details'>
        {/* images used here will have their own component this is just the design structure 
        take note */}
        <img src={first} alt="" />    
        <img className='second' src={second} alt="" />
      </div>
    </div>
</div>
  )
}


export default SelectedConnect