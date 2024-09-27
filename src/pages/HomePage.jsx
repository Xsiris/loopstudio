import React from 'react'
import TalkingPoint from '../components/TalkingPoint'
import Projects from '../components/Projects'

const HomePage = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col p-6">
            <div className="h-full flex flex-1 items-center justify-center">
                <div className="absolute w-full h-full bg-hero-bg left-0 top-0 z-[-1] md:bg-hero-bg-desktop md:bg-cover"></div>
                <div>
                    <h1 className="text-white font-JosefinSans text-5xl font-extralight tracking-wider md:p-8 md:border md:border-white">IMMERSIVE<br /> EXPERIENCES<br /> THAT<br /> DELIVER</h1>
                </div>
            </div>
        </div>
        <TalkingPoint />
        <Projects />
    </>
  )
}

export default HomePage
