
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import bghero from '../assets/test2.jpg';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <Parallax bgImage={bghero} strength={400}  >
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="hero h-screen flex items-center justify-center mb-8 "
      >
        <div className="flex flex-col items-end justify-center h-full px-4 sm:px-6 md:px-8 lg:px-10">
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-right lg:w-4/5 md:w-10/12 sm:w-10/12 mt-20 sm:mt-24 md:mt-28 lg:mt-36'>
            Your Digital Growth Partner
          </h1>
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-right mt-4 sm:mt-6 lg:ml-auto lg:w-3/5 md:w-7/12 sm:w-10/12'>
            We help businesses grow by creating digital experiences that people love.
          </h1>
          <a href="#" className='mt-4 sm:mt-6 lg:ml-auto bg-black text-white font-medium py-2 px-3 hover:bg-bruns rounded-sm transition ease-in-out duration-500 flex items-center'>
            Get in touch
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
            </svg>
          </a>
        </div>
      </motion.div>
    </Parallax>
  );
};

export default Hero;
