import React from 'react'
import interactive from '../img/mobile/image-interactive.jpg'
import interactiveDesktop from '../img/desktop/image-interactive.jpg'

const TalkingPoint = (/*{resizeCallback}*/) => {
  /*let interactResponsive = interactive;
  resizeCallback.push((currScreenSize) => {
      console.log("*** Resize Callback from Talking point *** with screen: " + currScreenSize);
      if(currScreenSize < 768){
        interactResponsive = interactive;
      }else{
        interactResponsive = interactiveDesktop;
      }
  });*/

  return (
    <div className="px-6 pt-20 relative md:mb-20 xl:px-60 xl:pt-40">
        <div className="flex items-center justify-center md:justify-start">
            <img className="md:hidden" src={interactive} alt="interactive" />
            <img className="min-[0px]:max-md:hidden" src={interactiveDesktop} alt="interactiveDesktop" />
        </div>
        <div className="px-6 py-12 text-center md:text-left md:px-12 md:absolute md:bottom-0 md:left-1/2 md:bg-white xl:w-1/4 xl:pr-0">
            <h1 className="mb-6 font-JosefinSans text-3xl font-extralight leading-8 xl:text-4xl">
                    THE LEADER IN INTERACTIVE VR
            </h1>
            <p className="font-Alata text-sm text-loopDarkGrey leading-6 xl:text-md">
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
