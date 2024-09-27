import React from 'react'
import TalkingPoint from '../components/TalkingPoint'
import Projects from '../components/Projects'

const HomePage = (/*{screenResizeCallback}*/) => {
  return (
    <>
        <div className="min-h-screen flex flex-col p-6 xl:p-60">
            <div className="h-full flex flex-1 items-center justify-center xl:justify-start">
                <div className="absolute w-full h-full bg-hero-bg left-0 top-0 z-[-1] md:bg-hero-bg-desktop md:bg-cover"></div>
                <div>
                    <h1 className="text-white font-JosefinSans text-5xl font-extralight tracking-wider md:p-8 md:border md:border-white xl:text-6xl">IMMERSIVE<br /> EXPERIENCES<br /> THAT<br /> DELIVER</h1>
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-6xl text-white animate-bounce">
              <i class="fa-solid fa-chevron-down"></i>
            </div>
        </div>
        <TalkingPoint /*resizeCallback={screenResizeCallback}*/ />
        <Projects /*resizeCallback={screenResizeCallback}*/ />
    </>
  )
}

export default HomePage
