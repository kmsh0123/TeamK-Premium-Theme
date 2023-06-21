import React, { useState } from 'react'
import {CiDeliveryTruck,CiTwitter} from "react-icons/ci"
import {BsFacebook,BsInstagram, BsYoutube} from "react-icons/bs"
import {FiMenu} from "react-icons/fi"
import {MdClose, MdKeyboardArrowDown} from "react-icons/md";
import {CiMenuFries} from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import SecNavbar from './SecNavbar';
const Navbar = () => {
    const [open,setOpen] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

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

    const handleMouseEnter1 = () => {
      setIsHovered1(true);
    };
  
    const handleMouseLeave1 = () => {
      setIsHovered1(false);
    };
  
    const handleMouseEnter2 = () => {
      setIsHovered2(true);
    };
  
    const handleMouseLeave2 = () => {
      setIsHovered2(false);
    };
  
    const handleMouseEnter3 = () => {
      setIsHovered3(true);
    };
  
    const handleMouseLeave3 = () => {
      setIsHovered3(false);
    };

  return (
       <div className={`bg-light ${isHovered1 ? "tw-h-[415px]" : "tw-h-[300px]"} ${isHovered2 ? "tw-h-[365px]" : "tw-h-[300px]"} ${isHovered3 ? "tw-h-[400px]" : "tw-h-[300px]"} lg:tw-h-auto tw-duration-300 tw-transition-all`}>
         <nav className="tw-flex tw-justify-between tw-items-center tw-py-3 tw-cursor-pointer container tw-relative">
            <div className='tw-flex'>
                        {/* Icon + Delivery */}
                      <div className="tw-flex tw-items-center">
                        <CiDeliveryTruck className='tw-text-xl'/>
                        <p className='lg:tw-text-[0.7rem] tw-text-[0.69rem] fw-semibold tw-leading-3 tw-mx-3'>FREE SHIPPING WORLDWIDE</p>
                      </div>
                        {/* Icon + Delivery */}
            <div className="">
              <ul className={`tw-px-3 lg:tw-px-0 tw-flex tw-flex-col lg:tw-flex-row  tw-absolute tw-left-0 tw-pt-5 lg:tw-pt-0 tw-w-full lg:tw-w-auto lg:tw-static ${open ? "" : "tw-top-[30px]"} lg:tw-top-auto lg:tw-ms-8 lg:tw-space-x-8 tw-space-y-3 lg:tw-space-y-0 tw-duration-300 tw-transition-all`}>
          {/* <First DropDownMenu */}
                <li className="nav-item tw-flex tw-items-center tw-justify-between dropdown"
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  <div className="tw-flex">
                    <img className='tw-me-2' src="https://yevgenysim-turkey.github.io/shopper/assets/img/flags/usa.svg" alt="" />
                  United State
                  </div>
                        <div className="">
                        <MdKeyboardArrowDown onClick={()=>setIsHovered1(!isHovered1)}/>
                        </div>
                                    {isHovered1 && 
                                      (
                                      <div className="dropdown-menu tw-p-0">
                                        <ul className="">
                                          <li className='tw-flex px-1'>
                                          <img className='tw-me-2' src="https://yevgenysim-turkey.github.io/shopper/assets/img/flags/usa.svg" alt="" />
                                          <p className="">United State</p>
                                          </li>
                                          <li className='tw-flex'>
                                          <img className='tw-me-2' src="https://yevgenysim-turkey.github.io/shopper/assets/img/flags/canada.svg" alt="" />
                                          <p className="px-1">Canada</p>
                                          </li>
                                          <li className='tw-flex'>
                                          <img className='tw-me-2' src="https://yevgenysim-turkey.github.io/shopper/assets/img/flags/germany.svg" alt="" />
                                          <p className="px-1">Germany</p>
                                          </li>
                                        </ul>
                                      </div>
                                    )}
                            </li>
  {/* <First DropDownMenu */}

                    
                <li style={{zIndex : "2"}} className={`nav-item tw-flex tw-items-center tw-justify-between dropdown ${isHovered1 ? "tw-pt-[6.75rem]" : ""} lg:tw-pt-0`}
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                                    <div className="tw-flex">
                                    USD
                                    </div>
                                  <div className="" >
                                  <MdKeyboardArrowDown onClick={()=>setIsHovered2(!isHovered2)}/>
                                  </div>
                                  {isHovered2 && 
                                      (
                                      <div className="dropdown-menu tw-mr-24 tw-left-[-20px] tw-p-0 tw-absolute">
                                        <ul className="">
                                          <li className=''>
                                          <p className="px-3">USD</p>
                                          </li>
                                          <li className=''>
                                          <p className="px-3">EUR</p>
                                          </li>
                                        </ul>
                                      </div>
                                    )}
                                  </li>

                          <li style={{zIndex : "2"}} className={`nav-item tw-flex tw-items-center tw-justify-between dropdown ${isHovered2 ? "tw-pt-16" : ""} lg:tw-pt-0`}
                             onMouseEnter={handleMouseEnter3}
                             onMouseLeave={handleMouseLeave3}
                            >
                                    <div className="tw-flex">
                                    English
                                    </div>
                                  <div className="">
                                  <MdKeyboardArrowDown onClick={()=>setIsHovered3(!isHovered3)}/>
                                  </div>
                                    {isHovered3 && 
                                      (
                                      <div className="dropdown-menu tw-p-0">
                                        <ul className="">
                                          <li className='tw-flex '>
                                          <p className="px-2">English</p>
                                          </li>
                                          <li className='tw-flex'>
                                          <p className="px-2">French</p>
                                          </li>
                                          <li className='tw-flex'>
                                          <p className="px-1">Germany</p>
                                          </li>
                                        </ul>
                                      </div>
                                    )}
                            </li>                          
              </ul> 
            </div>
          </div>

            <div className="tw-flex tw-items-center lg:tw-space-x-10">
                            <ul style={{zIndex : "1"}} className={`tw-px-3 lg:tw-px-0 tw-flex tw-flex-col lg:tw-flex-row tw-absolute tw-pt-7 lg:tw-pt-0 tw-w-full lg:tw-w-auto lg:tw-static lg:tw-top-auto lg:tw-ms-8 lg:tw-space-x-8 tw-space-y-3 lg:tw-space-y-0 tw-top-[132px] tw-duration-300 tw-transition-all tw-left-0 ${isHovered1 ? "tw-pt-[8.4rem]" : ""} ${isHovered2 ? "tw-pt-[5.5rem]" : ""} ${isHovered3 ? "tw-pt-[8rem]" : ""}`}>
                                  <Link to={`/shipping`}>
                                    <li className='nav-item'>
                                      Shipping
                                    </li>
                                  </Link>

                                  <Link to={`/faq`}>
                                    <li className='nav-item'>
                                      FAQ
                                    </li>
                                  </Link>
                                  <li className='nav-item'>
                                    Contact
                                  </li>
                            </ul>
                    
                            <ul className={`navbar-nav tw-px-3 lg:tw-px-0 tw-flex tw-flex-row tw-absolute tw-top-[234px] tw-left-0 lg:tw-static tw-space-x-4 tw-py-8 lg:tw-py-0 w-100 ${isHovered1 ? "tw-pt-[8.75rem]" : ""} ${isHovered2 ? "tw-pt-[6rem]" : ""} ${isHovered3 ? "tw-pt-[8.5rem]" : ""}`}>
                                    <li className="nav-item"><BsFacebook/></li>
                                    <li className="nav-item"><CiTwitter/></li>
                                    <li className="nav-item"><BsInstagram/></li>
                                    <li className="nav-item"><BsYoutube/></li>
                            </ul>
            </div>
            
            <FiMenu className='lg:tw-hidden tw-block tw-text-2xl' />
        </nav>
       </div>
       



  )
}

export default Navbar