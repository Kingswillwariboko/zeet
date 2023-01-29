import React, {useState} from 'react'
import { accountData } from '../../data';
import SearchBar from '../Search/SearchBar'
import filter from "../../assets/Vector (1).svg"
import frame from "../../assets/Frame 14.svg"
import dot from "../../assets/dot.svg"
import down from "../../assets/Vector 5.svg"

import "./backaccounts.scss"

const BackAccounts = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [selected, setSelected] = useState([]);


    const handleChange = (event) => {
        if (event.target.checked) {
          setSelected([...selected, event.target.value]);
        } else {
          setSelected(selected.filter(item => item !== event.target.value));
        }
      }
    
  return (
    <div className='accounts'>
        <div className='accounts__one'>
            <div className='filter'>
                <img src={filter} alt=""/>
                <p>filter</p>
                <img src={frame} alt=""/>
            </div>
            <div><SearchBar className="search"/></div>
            <div className='status'>Status <img src={down} alt=""/></div>
        </div>

        <div className='accounts__two'>
            <div>
                <label>
                    <input type="checkbox" checked={isChecked} 
                    onChange={() => setIsChecked((prev) => !prev)}
                    />
                    <div className='lists'>
                        <p>Bank Name</p>
                        <p>Account Number</p>
                        <p>Account Balance</p>
                        <p>Status</p>
                        
                    </div>
                </label>
            </div>
        </div>

        <div>
        {accountData.map((item) => (
        <div key={item.bankname} className='accounts__three'>
          <input
            type="checkbox"
            value={item.value}
            onChange={handleChange}
            
          />
          <label>
            <p>{item.bankname}</p>
            <p>{item.number}</p>
            <p>{item.balance}</p> 

            <div className='section'>
                <p style={{"background-color": item.background, "color": item.color}}  className='status'>
                    {item.status}
                    
                </p>
                <img src={dot} alt=""/>
            </div>
            
          </label>
        </div>
      ))}
        </div>
    </div>
  )
}

export default BackAccounts