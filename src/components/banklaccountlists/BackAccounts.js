import React, {useState} from 'react'
import { accountData } from '../../data';
import SearchBar from '../Search/SearchBar'

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
            <div className='filter'>filter</div>
            <div><SearchBar className="search"/></div>
            <div className='status'>Status</div>
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
        <div className='accounts__three' key={item.id}>
          <input
            type="checkbox"
            value={item.value}
            onChange={handleChange}
            checked={selected.includes(item)}
          />
          <label>
            <p>{item.bankname}</p>
            <p>{item.bankname}</p>
            <p>{item.bankname}</p> 
            <p className='status'>{item.status}</p>
          </label>
        </div>
      ))}
        </div>
    </div>
  )
}

export default BackAccounts