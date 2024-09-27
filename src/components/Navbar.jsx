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
        <ul className="text-white mb-6 flex gap-8">
          <li className="py-2 text-md font-Alata tracking-widest font-extralight text-white"><a href="#">About</a></li>
          <li className="py-2 text-md font-Alata tracking-widest font-extralight text-white"><a href="#">Careers</a></li>
          <li className="py-2 text-md font-Alata tracking-widest font-extralight text-white"><a href="#">Events</a></li>
          <li className="py-2 text-md font-Alata tracking-widest font-extralight text-white"><a href="#">Products</a></li>
          <li className="py-2 text-md font-Alata tracking-widest font-extralight text-white"><a href="#">Support</a></li>
        </ul>
      </div>
    </nav>
    
  )
}

export default Navbar
