import React from 'react'
import {CiDeliveryTruck} from "react-icons/ci"
const Navbar = () => {
    const meunLinks = [
        {name : "United States" , link : "#"},
        {name : "USD" , link : "#"},
        {name : "English" , link : "#"},
    ]
  return (
    <div className='tw-flex tw-items-center container'>
        <CiDeliveryTruck/>
        <h1>FREE SHIPPING WORLDWIDE</h1>
        <ul className='tw-flex tw-items-center'>
        {
            meunLinks.map(item => (
                <li key={item.key}>{item.name}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default Navbar