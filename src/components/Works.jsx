import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { workprojects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { Navbar } from './'


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={() => window.open(source_code_link, "blank")}
      className="cursor-pointer">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-gradient-to-r from-red-500 to-orange-500 p-5 rounded-2xl
        sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover
            rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-black text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {

  return (
    <div>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center flex justify-center w-full">
        <Navbar />
      </div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Creating Impact</p>
        <h2 className={styles.sectionHeadText}>Work Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
        </motion.p>
      </div>

      <div className="mt-5 flex flex-wrap gap-7">
        {workprojects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
      <p className={`${styles.sectionSubText} mt-2`} >More projects are being added during the next few days!! Happy Holidays - Alex Meng 12/21/2024</p>

      {/* See More Button */}
      {/* <div className="flex justify-center mt-10">
        <a
          href="https://example.com" // Replace with your desired URL
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-6 rounded-full text-[16px] font-bold hover:opacity-90 transition-opacity duration-200"
        >
          See More
        </a>
      </div> */}
    </div>
  )
}

export default SectionWrapper(Works, "")