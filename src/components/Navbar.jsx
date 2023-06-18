import React, { useState } from 'react'
import {CiDeliveryTruck,CiTwitter} from "react-icons/ci"
import {BsFacebook,BsInstagram, BsYoutube} from "react-icons/bs"
import {FiMenu} from "react-icons/fi"
import {MdClose, MdKeyboardArrowDown} from "react-icons/md";
import {CiMenuFries} from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import SecNavbar from './SecNavbar';
const Navbar = () => {
    const [open,setOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const menuLinks = [
        {id: 1 ,name : "United States",link : "#"},
        {id: 2 ,name : "USD",link : "#"},
        {id: 3 ,name : "English",link : "#"},
    ]
   
    const Links = [
        {name : "shipping" , link : "/shipping"},
        {name : "FAQ" , link : "/faq"},
        {name : "Contact", link : "/contact"}
    ]

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  return (
        <nav className="navbar navbar-topbar navbar-expand-xl bg-light tw-py-3 tw-cursor-pointer ">
            <div className='container-lg position-relative'>
                        {/* Icon + Delivery */}
                    <div className="tw-flex tw-items-center">

                        <div className="tw-flex tw-items-center">
                        <CiDeliveryTruck className='tw-text-xl'/>
                        <p className='lg:tw-text-[0.7rem] tw-text-[0.69rem] fw-semibold tw-leading-3 tw-mx-3'>FREE SHIPPING WORLDWIDE</p>
                        </div>
                        {/* Icon + Delivery */}
                            <ul className="navbar-nav bg-light tw-flex tw-flex-col lg:tw-flex-row tw-px-6 lg:tw-px-0 tw-absolute tw-left-0 tw-pt-2 lg:tw-pt-0 tw-w-full lg:tw-w-auto lg:tw-static tw-top-[30px] lg:tw-top-auto lg:tw-ms-8 lg:tw-space-x-8 tw-space-y-3 lg:tw-space-y-0 tw-duration-300 tw-transition-all ">
                              {/* <First DropDownMenu */}
                            <li className="nav-item tw-flex tw-items-center tw-justify-between dropdown"
                             onMouseEnter={handleMouseEnter}
                             onMouseLeave={handleMouseLeave}
                            >
                                    <div className="tw-flex">
                                      <img className='tw-me-2' src="https://yevgenysim-turkey.github.io/shopper/assets/img/flags/usa.svg" alt="" />
                                    United State
                                    </div>
                                  <div className="">
                                  <MdKeyboardArrowDown onClick={()=>setIsHovered(!isHovered)}/>
                                  </div>
                                    {isHovered && 
                                      (
                                      <div className="dropdown-menu">
                                        <ul className="">
                                          <li className='tw-flex'>
                                          <img className='tw-me-2' src="https://yevgenysim-turkey.github.io/shopper/assets/img/flags/usa.svg" alt="" />
                                          <p>United State</p>
                                          </li>
                                          <li className='tw-flex'>
                                          <img className='tw-me-2' src="https://yevgenysim-turkey.github.io/shopper/assets/img/flags/canada.svg" alt="" />
                                          <p>Canada</p>
                                          </li>
                                          <li className='tw-flex'>
                                          <img className='tw-me-2' src="https://yevgenysim-turkey.github.io/shopper/assets/img/flags/germany.svg" alt="" />
                                          <p>Germany</p>
                                          </li>
                                        </ul>
                                      </div>
                                    )}
                            </li>
                            {/* <First DropDownMenu */}

                              {/* <li className="flex items-center px-3 py-2 text-sm hover:bg-gray-100">
                                Dropdown List 1
                              </li> */}
                                  <li className="nav-item tw-flex tw-items-center tw-justify-between">
                                    <div className="tw-flex">
                                    USD
                                    </div>
                                  <div className="">
                                  <MdKeyboardArrowDown/>
                                  </div>
                                  </li>
                              <li className="nav-item tw-flex tw-items-center tw-justify-between">
                                <div className="tw-flex">
                                English
                                </div>
                              <div className="">
                              <MdKeyboardArrowDown/>
                              </div>
                              </li>                           
                            </ul> 
                    </div>

                    <div className="tw-flex tw-items-center">
                            <ul className="navbar-nav bg-light tw-flex tw-flex-col lg:tw-flex-row tw-px-6 tw-absolute tw-pt-3 lg:tw-pt-0 tw-w-full lg:tw-w-auto lg:tw-static lg:tw-top-auto lg:tw-ms-8 lg:tw-space-x-8 tw-space-y-3 lg:tw-space-y-0 tw-top-[132px] tw-duration-300 tw-transition-all tw-left-0">
                                   {
                                    Links.map(item => (
                                    <li key={item.name} className="nav-item">{item.name}</li>

                                    ))
                                   }
                            </ul>
                    
                            <ul className='navbar-nav bg-light tw-flex tw-px-6 tw-flex-row tw-absolute tw-top-[234px] tw-left-0 lg:tw-static tw-space-x-5 tw-py-5 lg:tw-py-0 w-100'>
                                    <li className="nav-item"><BsFacebook/></li>
                                    <li className="nav-item"><CiTwitter/></li>
                                    <li className="nav-item"><BsInstagram/></li>
                                    <li className="nav-item"><BsYoutube/></li>
                            </ul>
                    </div>
            {/* MENUICON */}
                        <FiMenu className='lg:tw-hidden'/>
        {/* MENUICON */}

            </div>
        </nav>
       
//    


  )
}

export default Navbar