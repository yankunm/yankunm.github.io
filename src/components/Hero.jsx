import React from 'react';
import GifGrid from './GifGrid';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Background GIF Grid */}
      <div className="h-full overflow-hidden"> {/* Limit height and allow scrolling */}
        {/* Background GIF Grid */}
        <GifGrid />
      </div>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ff0000]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}><span className="bg-gradient-to-r from-orange-600 to-red-600 
          inline-block text-transparent bg-clip-text drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
            Polymathic
          </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Simons Foundation
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary flex 
          justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full
              bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

// import { motion } from 'framer-motion'
// import { styles } from '../styles'
// import { ComputersCanvas } from "./canvas"

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen mx-auto">
//       <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#ff0000]"></div>
//           <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText}`}><span className="bg-gradient-to-r from-orange-600 to-red-600 
//           inline-block text-transparent bg-clip-text drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
//             Hi, I'm Alex Meng
//           </span></h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             A Senior studying Computer Science and Electrical and Computer Engineering at Duke University.
//           </p>
//         </div>

//       </div>
//       {/* <ComputersCanvas /> */}
//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px]
//           rounded-3xl border-4 border-secondary flex 
//           justify-center items-start p-2">
//             <motion.dev
//               animate={{
//                 y: [0, 24, 0]
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: 'loop'
//               }}
//               className="w-3 h-3 rounded-full
//               bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section >
//   )
// }

// export default Hero