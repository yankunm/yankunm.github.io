import { motion } from 'framer-motion'
import { styles } from '../styles'
import { StarsCanvas } from "./canvas"


const Hero = () => {
  return (
    <section className="relative w-full h-[40vh] mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ff0000]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}><span className="bg-gradient-to-r from-orange-600 to-red-600 
          inline-block text-transparent bg-clip-text drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
            Hi, I'm Alex Meng
          </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            An Aspiring Innovator, Artist, and Educator
          </p>
          <p className={`${styles.sectionSubText} mt-2`} > Welcome to my Universe</p>
          {/* <p className={`${styles.sectionSubText} mt-2`} > Happy Holidays!! --Alex Meng</p> */}
        </div>
      </div>


      <StarsCanvas />
    </section >
  )
}

export default Hero