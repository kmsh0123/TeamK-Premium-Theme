import React from 'react'
import {AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai"
import {FiMenu} from "react-icons/fi"

const SecNavbar = () => {
    const menuLinks = [
        {name : "Home",link : "/"},
        {name : "Catalog",link : "/"},
        {name : "Shop",link : "/"},
        {name : "Pages",link : "/"},
        {name : "Blog",link : "/"},
        {name : "Docs",link : "/"},
    ]
    const menuIcons = [
        {id : 1, icon : <AiOutlineSearch/> , link : "#"},
        {id : 2, icon : <AiOutlineUser/> , link : "#"},
        {id : 3, icon : <AiOutlineHeart/> , link : "#"},
        {id : 4, icon : <AiOutlineShoppingCart/> , link : "#"}
    ]
  return (
    <>
     <nav className='container-lg tw-flex tw-justify-between tw-items-center tw-relative tw-top-6 tw-cursor-pointer'>
        <div className="tw-py-11 tw-flex w-100 tw-items-center tw-justify-between">
            <p className='lg:tw-text-3xl tw-text-2xl tw-font-semibold'>Shopper.</p>

            <div className="">
                <ul className='tw-flex tw-flex-col lg:tw-flex-row tw-absolute tw-top-[75px] tw-left-0 tw-px-3 lg:tw-static tw-space-y-5 lg:tw-space-y-0 lg:tw-space-x-10 tw-space-x-0 tw-py-5 lg:tw-py-0'>
                    {
                        menuLinks.map(item => (
                            <li key={item.name} className="lg:tw-text-[15px] tw-font-semibold tw-text-sm">{item.name}</li>
                        ))
                    }
                </ul>
            </div>

            <div className="tw-absolute tw-top-[315px] lg:tw-static">
                <ul className='tw-flex tw-items-center tw-space-x-4 ms-auto tw-py-5 lg:tw-py-0'>
                    {
                        menuIcons.map(menu => (
                            <li key={menu.id} className="tw-text-xl">{menu.icon}</li>
                        ))
                    }
                </ul>
            </div> 

        </div> 
          <div className="tw-flex">
                <FiMenu className='lg:tw-hidden tw-block'/>
            </div>
    </nav>
    <div className="tw-border tw-relative tw-top-[275px] lg:tw-static lg:tw-top-auto"></div>    
    </>
       
  )
}

export default SecNavbar