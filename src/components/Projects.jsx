import React from 'react'
import earth from '../img/mobile/image-deep-earth.jpg'
import curiosity from '../img/mobile/image-curiosity.jpg'
import fisheye from '../img/mobile/image-fisheye.jpg'
import above from '../img/mobile/image-from-above.jpg'
import grid from '../img/mobile/image-grid.jpg'
import arcade from '../img/mobile/image-night-arcade.jpg'
import borealis from '../img/mobile/image-pocket-borealis.jpg'
import soccer from '../img/mobile/image-soccer-team.jpg'

const Projects = () => {
  return (
    <div className="pt-8 pb-20">
      <h1 className="text-center text-3xl font-JosefinSans font-extralight mb-6">OUR CREATIONS</h1>
      <div className="p-6 pb-0">
        <a href="#">
            <div className="relative">
                <img src={earth} alt="earth" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white">DEEP<br/>EARTH</h2>
            </div>
        </a>
      </div>

      <div className="p-6 pb-0">
        <a href="#">
            <div className="relative">
                <img src={arcade} alt="arcade" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white">NIGHT<br/>ARCADE</h2>
            </div>
        </a>
      </div>

      <div className="p-6 pb-0">
        <a href="#">
            <div className="relative">
                <img src={soccer} alt="soccer" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white">SOCCER<br/>TEAM VR</h2>
            </div>
        </a>
      </div>

      <div className="p-6 pb-0">
        <a href="#">
            <div className="relative">
                <img src={grid} alt="grid" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white">THE<br/>GRID</h2>
            </div>
        </a>
      </div>

      <div className="p-6 pb-0">
        <a href="#">
            <div className="relative">
                <img src={above} alt="above" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white">FROM UP<br/>ABOVE VR</h2>
            </div>
        </a>
      </div>

      <div className="p-6 pb-0">
        <a href="#">
            <div className="relative">
                <img src={borealis} alt="borealis" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white">POCKET<br/>BOREALIS</h2>
            </div>
        </a>
      </div>

      <div className="p-6 pb-0">
        <a href="#">
            <div className="relative">
                <img src={curiosity} alt="curiosity" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white">THE<br/>CURIOSITY</h2>
            </div>
        </a>
      </div>

      <div className="p-6 pb-0">
        <a href="#">
            <div className="relative">
                <img src={fisheye} alt="fisheye" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-JosefinSans font-extralight text-white">MAKE IT<br/>FISHEYE</h2>
            </div>
        </a>
      </div>

      <div className="p-6 mt-6">
        <div className="text-center">
            <a href="#" className="text-lg font-Alata tracking-widest font-extralight text-black px-12 py-3 border border-black">SEE ALL</a>
        </div>
      </div>
    </div>
  )
}

export default Projects
