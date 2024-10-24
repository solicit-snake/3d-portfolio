import {motion} from 'framer-motion'
import {styles} from '../styles'
import { Dancer } from './canvas'

import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto normal-bg-element">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#cab21e]"/>
          <div className="w-1 sm:h-80 h-40 yellow-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#cab21e]">Kyle</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications with 3D visuals, user interfaces, and also make music as a hobby.
          </p>
        </div>
      </div>

      <Dancer/>
    </section>
  )
}

export default Hero