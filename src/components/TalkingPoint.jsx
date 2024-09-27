import React from 'react'
import interactive from '../img/mobile/image-interactive.jpg'

const TalkingPoint = () => {
  return (
    <div class="px-6 pt-20">
        <div>
            <img src={interactive} alt="interactive" />
        </div>
        <div className="px-6 py-12 text-center">
            <h1 className="mb-6 font-JosefinSans text-3xl font-extralight leading-8">
                    THE LEADER IN INTERACTIVE VR
            </h1>
            <p className="font-Alata text-sm text-loopDarkGrey leading-6">
                Founded in 2011, Loopstudios has been producing world-class virtual reality 
                projects for some of the best companies around the globe. Our award-winning 
                creations have transformed businesses through digital experiences that bind 
                to their brand.
            </p>
        </div>
    </div>
  )
}

export default TalkingPoint
