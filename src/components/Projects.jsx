import React from 'react'
import earth from '../img/mobile/image-deep-earth.jpg'
import curiosity from '../img/mobile/image-curiosity.jpg'
import fisheye from '../img/mobile/image-fisheye.jpg'
import above from '../img/mobile/image-from-above.jpg'
import grid from '../img/mobile/image-grid.jpg'
import arcade from '../img/mobile/image-night-arcade.jpg'
import borealis from '../img/mobile/image-pocket-borealis.jpg'
import soccer from '../img/mobile/image-soccer-team.jpg'

import earthDesktop from '../img/desktop/image-deep-earth.jpg'
import curiosityDesktop from '../img/desktop/image-curiosity.jpg'
import fisheyeDesktop from '../img/desktop/image-fisheye.jpg'
import aboveDesktop from '../img/desktop/image-from-above.jpg'
import gridDesktop from '../img/desktop/image-grid.jpg'
import arcadeDesktop from '../img/desktop/image-night-arcade.jpg'
import borealisDesktop from '../img/desktop/image-pocket-borealis.jpg'
import soccerDesktop from '../img/desktop/image-soccer-team.jpg'

const Projects = () => {
  return (
    <>
      <div className="xl:flex xl:justify-between xl:items-center xl:px-60 xl:pt-20">
        <h1 className="text-center text-3xl font-JosefinSans font-extralight mb-6 pt-8 xl:text-4xl">OUR CREATIONS</h1>
      <div className="">
        <div className="text-center">
            <a href="#" className="text-lg font-Alata tracking-widest font-extralight text-black px-12 py-3 border border-black min-[0px]:max-xl:hidden">SEE ALL</a>
        </div>
      </div>
      </div>
      <div className="pb-20 flex flex-col items-center justify-center md:flex-row md:flex-wrap xl:px-60 xl:pb-40">
        <div className="p-6 pb-0 xl:flex xl:w-1/4 xl:items-center xl:justify-center xl:pt-12">
          <a href="#">
              <div className="relative">
                <img className="md:hidden" src={earth} alt="earth" />
                <img className="min-[0px]:max-md:hidden" src={earthDesktop} alt="earth" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white xl:text-4xl">DEEP<br/>EARTH</h2>
              </div>
          </a>
        </div>

        <div className="p-6 pb-0 xl:flex xl:w-1/4 xl:items-center xl:justify-center xl:pt-12">
          <a href="#">
              <div className="relative">
                <img className="md:hidden" src={arcade} alt="earth" />
                <img className="min-[0px]:max-md:hidden" src={arcadeDesktop} alt="earth" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white xl:text-4xl">NIGHT<br/>ARCADE</h2>
              </div>
          </a>
        </div>

        <div className="p-6 pb-0 xl:flex xl:w-1/4 xl:items-center xl:justify-center xl:pt-12">
          <a href="#">
              <div className="relative">
                <img className="md:hidden" src={soccer} alt="earth" />
                <img className="min-[0px]:max-md:hidden" src={soccerDesktop} alt="earth" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white xl:text-4xl">SOCCER<br/>TEAM VR</h2>
              </div>
          </a>
        </div>

        <div className="p-6 pb-0 xl:flex xl:w-1/4 xl:items-center xl:justify-center xl:pt-12">
          <a href="#">
              <div className="relative">
                <img className="md:hidden" src={grid} alt="earth" />
                <img className="min-[0px]:max-md:hidden" src={gridDesktop} alt="earth" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white xl:text-4xl">THE<br/>GRID</h2>
              </div>
          </a>
        </div>

        <div className="p-6 pb-0 xl:flex xl:w-1/4 xl:items-center xl:justify-center xl:pt-12">
          <a href="#">
              <div className="relative">
                <img className="md:hidden" src={above} alt="earth" />
                <img className="min-[0px]:max-md:hidden" src={aboveDesktop} alt="earth" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white xl:text-4xl">FROM UP<br/>ABOVE VR</h2>
              </div>
          </a>
        </div>

        <div className="p-6 pb-0 xl:flex xl:w-1/4 xl:items-center xl:justify-center xl:pt-12">
          <a href="#">
              <div className="relative">
                <img className="md:hidden" src={borealis} alt="earth" />
                <img className="min-[0px]:max-md:hidden" src={borealisDesktop} alt="earth" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white xl:text-4xl">POCKET<br/>BOREALIS</h2>
              </div>
          </a>
        </div>

        <div className="p-6 pb-0 xl:flex xl:w-1/4 xl:items-center xl:justify-center xl:pt-12">
          <a href="#">
              <div className="relative">
                <img className="md:hidden" src={curiosity} alt="earth" />
                <img className="min-[0px]:max-md:hidden" src={curiosityDesktop} alt="earth" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white xl:text-4xl">THE<br/>CURIOSITY</h2>
              </div>
          </a>
        </div>

        <div className="p-6 pb-0 xl:flex xl:w-1/4 xl:items-center xl:justify-center xl:pt-12">
          <a href="#">
              <div className="relative">
                <img className="md:hidden" src={fisheye} alt="earth" />
                <img className="min-[0px]:max-md:hidden" src={fisheyeDesktop} alt="earth" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white xl:text-4xl">MAKE IT<br/>FISHEYE</h2>
              </div>
          </a>
        </div>
      </div>
      <div className="p-6 my-6 xl:hidden">
        <div className="text-center">
            <a href="#" className="text-lg font-Alata tracking-widest font-extralight text-black px-12 py-3 border border-black">SEE ALL</a>
        </div>
      </div>
    </>
  )
}

export default Projects
