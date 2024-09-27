import React from 'react'
import logo from '../img/logo.svg'
import hamburger from '../img/icon-hamburger.svg'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-transparent absolute w-full top-0 left-0">
      <div><img src={logo} alt="Logo" /></div>
      <div><a href="#"><img className="w-8" src={hamburger} alt="Menu" /></a></div>
    </nav>
    
  )
}

export default Navbar
