import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { textVariant , fadeIn } from '../utils/motion'
import { styles } from '../styles'
import { projects } from '../constants'
import { Tilt } from 'react-tilt'
import { github, websiteLogo} from '../assets'
import { desc } from 'framer-motion/client'

const ProjectCard = ({index, name, description, tags, image, source_code_link, website_link}) => {
  return(
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounder-2xl'  
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'> 
          <div 
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt="github"
              className='w-3/4 h-3/4 object-contain'
            />
          </div>
        </div>
        <div className='absolute inset-0 flex justify-end m-3 mr-[50px] card-img_hover'> 
          <div 
            onClick={() => window.open(website_link, "_blank")}
            className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={websiteLogo}
              alt="github"
              className='w-3/4 h-3/4 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white text-[20px]'>{name}</h3>
        <p className='text-white font-extralight text-[15px]'> {description} </p>
      </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className = "w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        > 
          Some projects i've worked on to learn react and showcase some of my skills
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")