import React from 'react'
import logo from '../img/logo.svg'
import hamburger from '../img/icon-hamburger.svg'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-transparent absolute w-full top-0 left-0 md:p-10">
      <div><img src={logo} alt="Logo" /></div>
      <div className="lg:hidden">
        <a href="#"><img className="w-8" src={hamburger} alt="Menu" /></a>
      </div>
      <div className="min-[0px]:max-lg:hidden">
      <ul className="text-white mb-6 xl:flex xl:gap-5 xl:mb-0">
          <li className="py-2 text-md font-Alata tracking-widest font-extralight text-white relative">
            <div className="group">
              <div className="group-hover:border-b-2  absolute w-1/2 h-0 bottom-0 left-1/2 -translate-x-1/2"></div>
              <a className="z-10" href="#">About</a>
            </div>
          </li>
          <li className="py-2 text-md font-Alata tracking-widest font-extralight text-white relative">
            <div className="group">
              <div className="group-hover:border-b-2  absolute w-1/2 h-0 bottom-0 left-1/2 -translate-x-1/2"></div>
              <a className="z-10" href="#">Contact</a>
            </div>
          </li>
          <li className="py-2 text-md font-Alata tracking-widest font-extralight text-white relative">
            <div className="group">
              <div className="group-hover:border-b-2  absolute w-1/2 h-0 bottom-0 left-1/2 -translate-x-1/2"></div>
              <a className="z-10" href="#">Events</a>
            </div>
          </li>
          <li className="py-2 text-md font-Alata tracking-widest font-extralight text-white relative">
            <div className="group">
              <div className="group-hover:border-b-2  absolute w-1/2 h-0 bottom-0 left-1/2 -translate-x-1/2"></div>
              <a className="z-10" href="#">Products</a>
            </div>
          </li>
          <li className="py-2 text-md font-Alata tracking-widest font-extralight text-white relative">
            <div className="group">
              <div className="group-hover:border-b-2  absolute w-1/2 h-0 bottom-0 left-1/2 -translate-x-1/2"></div>
              <a className="z-10" href="#">Support</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    
  )
}

export default Navbar
