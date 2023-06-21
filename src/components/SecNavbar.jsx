import React from 'react'
import {AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai"
import {FiMenu} from "react-icons/fi"
import { Link, NavLink, useLocation } from 'react-router-dom'

const SecNavbar = () => {
    const location = useLocation();
    const menuLinks = [
        {name : "Home",link : "/"},
        {name : "Catalog",link : "/catalog"},
        {name : "Shop",link : "/shop"},
        {name : "Pages",link : "/page"},
        {name : "Blog",link : "/blog"},
        {name : "Docs",link : "/docs"},
    ]
    const menuIcons = [
        {id : 1, icon : <AiOutlineSearch/> , link : "#"},
        {id : 2, icon : <AiOutlineUser/> , link : "#"},
        {id : 3, icon : <AiOutlineHeart/> , link : "#"},
        {id : 4, icon : <AiOutlineShoppingCart/> , link : "#"}
    ]
  return (
    <div className='bg-secondary tw-h-[362px] lg:tw-h-auto tw-top-[-258px] tw-relative tw-z-[2] lg:tw-top-0'>
     <nav className='navbar navbar-topbar navbar-expand-xl tw-flex tw-justify-between tw-items-center container tw-relative tw-top-3 tw-cursor-pointer'>
        <div className="container tw-flex w-100 tw-items-center tw-justify-between">
            <p className='lg:tw-text-3xl tw-text-2xl tw-font-semibold'>Shopper.</p>

            <div className="">
                <ul className='tw-flex tw-flex-col lg:tw-flex-row tw-absolute lg:tw-top-[75px] tw-top-[44px] tw-left-0 tw-px-3 lg:tw-static tw-space-y-5 lg:tw-space-y-0 lg:tw-space-x-10 tw-space-x-0 tw-py-5 lg:tw-py-0 md:tw-w-full'>
                    {
                        menuLinks.map(item => (
                            <Link key={item.name} to={item.link} className={`${location.pathname === item.link ? "tw-text-[#ff6f61]" : "hover:tw-text-[#ff6f61]"} lg:tw-text-[15px] tw-font-semibold tw-text-sm  tw-duration-300 tw-transition-all `}>
                               {item.name}
                            </Link>
                        ))
                    }

                </ul>
            </div>

            <div className="tw-absolute tw-top-[315px] lg:tw-static">
                <ul className='tw-flex tw-items-center tw-top-[-25px] tw-relative lg:tw-static tw-space-x-4 md:tw-me-3 lg:tw-me-0 tw-py-5 lg:tw-py-0'>
                    {
                        menuIcons.map(menu => (
                            <li key={menu.id} className="tw-text-xl">{menu.icon}</li>
                        ))
                    }
                </ul>
            </div> 
            
            <FiMenu className='lg:tw-hidden tw-block tw-text-2xl'/>
        </div> 
               
    </nav>
    <div className="tw-border tw-relative tw-top-[315px] lg:tw-relative lg:tw-top-[30px]"></div>    
    </div>
       
  )
}

export default SecNavbar