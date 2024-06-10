import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { intro } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const PictureCard = ({ index, imageUrl }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full rounded-[20px]"
        style={{ backgroundColor: 'transparent' }} // Set background color to transparent
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center"
        >
          <img
            src={imageUrl}
            alt={`Image ${index}`}
            className="w-full h-full object-cover rounded-[20px]"
            style={{ objectFit: 'cover' }} // Ensure the image covers the entire container
          />
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
         leading-[30px]"
      // deleted: max-w-3xl
      >
        <p>Welcome to my website! This website serves as a collection of my technical and artistic endeavors. It also serves as a personal reference of the things I learned.</p><br />

        <p>My goal in life is to become a person who improves lives and brings joy to others through technology and art. Whether it's solving problems that trouble people or choreographing a dance piece, I strive to make a positive impact and inspire others through my work.</p><br />

        <p>Look around and feel free to reach out to me or give me feedbacks!! You can always reach out to me through the contact form below, or through email or social media. </p>
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {intro.map((service, index) => (
          <PictureCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  )
}

export default SectionWrapper(About, "about") 