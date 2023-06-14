import React from 'react'
import {CiDeliveryTruck,CiTwitter} from "react-icons/ci"
import {BsFacebook,BsInstagram, BsYoutube} from "react-icons/bs"
import {FiMenu} from "react-icons/fi"
const Navbar = () => {
    const meunLinks = [
        {name : "United States" , link : "#"},
        {name : "USD" , link : "#"},
        {name : "English" , link : "#"},
    ]
    const Links = [
        {name : "shipping" , link : "/shipping"},
        {name : "FAQ" , link : "/faq"},
        {name : "Contact", link : "/contact"}
    ]
  return (
    <div className="container-fluid tw-bg-[#f5f5f5] tw-p-3 tw-flex tw-w-full">
        <div className='tw-flex tw-items-center lg:tw-justify-between container'>
            <div className="tw-flex tw-items-center lg:tw-justify-between">
                <CiDeliveryTruck className='tw-text-xl'/>
                <p className='lg:tw-text-[0.7rem] tw-text-[0.69rem] fw-semibold tw-leading-3 tw-mx-3'>FREE SHIPPING WORLDWIDE</p>
        <ul className='tw-px-14 tw-flex tw-flex-col lg:tw-flex-row lg tw-absolute tw-left-0 tw-pt-4 lg:tw-pt-0 tw-w-full lg:tw-w-auto lg:tw-static tw-bg-[#f5f5f5] container-fluid md:tw-top-[50px] lg:tw-ms-8 lg:tw-space-x-8'>
        {
            meunLinks.map(item => (
                <li key={item.name} className='tw-font-semibold'>{item.name}</li>
            ))
        }
        </ul>     
    </div>

    

    <div className="d-flex lg:tw-items-center">
       <ul className='tw-flex lg:tw-flex tw-hidden lg:tw-items-center tw-me-8 tw-space-x-8'>
        {
            Links.map(item => (
                <li key={item.name} className='tw-font-semibold'>{item.name}</li>
            ))
        }
        </ul>
        <ul className='tw-flex lg:tw-flex tw-hidden  lg:tw-items-center tw-space-x-3'>
            <li><BsFacebook/></li>
            <li><CiTwitter/></li>
            <li><BsInstagram/></li>
            <li><BsYoutube/></li>
        </ul>
    </div>
    </div>
    <div className="tw-flex">
        <FiMenu className='tw-relative tw-text-3xl lg:tw-hidden tw-block'/>
    </div>
    </div>

  )
}

export default Navbar