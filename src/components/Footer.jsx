import React from 'react'
import logo from '../img/logo.svg'

const Footer = () => {
  return (
    <div className="flex flex-col px-6 py-12 bg-black items-center justify-center">
      <img className="w-36 mb-6" src={logo} alt="logo" />
      <ul className="text-white mb-6">
        <li className="py-2 text-sm font-Alata tracking-widest font-extralight text-white"><a href="#">About</a></li>
        <li className="py-2 text-sm font-Alata tracking-widest font-extralight text-white"><a href="#">Careers</a></li>
        <li className="py-2 text-sm font-Alata tracking-widest font-extralight text-white"><a href="#">Events</a></li>
        <li className="py-2 text-sm font-Alata tracking-widest font-extralight text-white"><a href="#">Products</a></li>
        <li className="py-2 text-sm font-Alata tracking-widest font-extralight text-white"><a href="#">Support</a></li>
      </ul>
      <ul className="text-white text-2xl mb-6 gap-5">
        <li><a href="#"><i class="fa-brands fa-square-facebook"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-pinterest"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
      </ul>
      <p className="text-loopVeryDarkGray"> © 2021 Loopstudios. All rights reserved.</p>
    </div>
  )
}

export default Footer
