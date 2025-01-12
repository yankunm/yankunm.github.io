import { motion } from 'framer-motion'

import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

// const SectionWrapper = (Component, idName) =>
//     function HOC() {
//         return (
//             <motion.section
//                 variants={staggerContainer()}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.25 }}
//                 className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
//             >
//                 <span className="hash-span" id={idName} style={{ display: "block", height: "0px", marginTop: "-100px" }}>
//                     &nbsp;
//                 </span>
//                 <Component />
//             </motion.section>
//         )
//     }

import { useEffect } from "react";

const SectionWrapper = (Component, idName) =>
    function HOC() {
        useEffect(() => {
            const hash = window.location.hash.slice(1); // Remove the '#' from the hash
            if (hash === idName) {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        }, []); // Runs on mount

        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span
                    className="hash-span"
                    id={idName}
                    style={{ display: "block", height: "0px", marginTop: "0px" }}
                >
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        );
    };


export default SectionWrapper