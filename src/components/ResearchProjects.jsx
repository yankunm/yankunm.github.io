import { motion } from 'framer-motion'
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { researchprojects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { Navbar } from './'


const ProjectCard = ({ index, name, description, image, website_link, demo_link }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-5 rounded-2xl
        sm:w-[360px] w-full">
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

                <div className="mt-5 flex space-x-3">
                    <button
                        onClick={() => window.open(website_link, "_blank")}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                    >
                        More Info
                    </button>
                    <button
                        onClick={() => window.open(demo_link, "_blank")}
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
                    >
                        Try it Out
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

const ResearchProjects = () => {
    return (
        <div>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center flex justify-center w-full">
                <Navbar />
            </div>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Making Change</p>
                <h2 className={styles.sectionHeadText}>Selected Research Projects.</h2>
            </motion.div>

            <div className="mt-10 flex flex-wrap gap-7">
                {researchprojects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(ResearchProjects, "")