import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { Link } from 'react-router-dom'
import { StarsCanvas } from "./canvas"



const ServiceCard = ({ index, title, icon, link }) => {
  return (
    <Link to={link}>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          // Change service card border color here
          className="w-full bg-gradient-to-r from-red-500 to-orange-500 p-[1px] rounded-[20px] shadow-card cursor-pointer"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            // Change service card background color here
            className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>

        </motion.div>

      </Tilt>
    </Link>
  )
}

const About = () => {
  return (
    <>

      {/* <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div> */}

      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
         leading-[30px]"
      >
      </motion.p> */}

      {/* Embedded YouTube Video */}
      <div className="mt-24 flex justify-center">
        <iframe
          className="rounded-lg shadow-lg"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8ZEK34P9ipQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>



      <div className="mt-20">
        {/* <p className="text-right text-secondary text-[17px] leading-[30px] pr-4">
          Stars Canvas, a 3D rotating point cloud generated with a random spherical distribution using Three.js
        </p> */}
        <p className="text-right text-secondary text-[17px] leading-[30px] pr-4">
          This website was programmed by Alex Meng using React, Tailwind CSS, and Three.js
        </p>
      </div>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}

      <StarsCanvas />
    </>
  )
}

export default SectionWrapper(About, "about") 