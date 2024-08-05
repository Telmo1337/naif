import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { sections } from "../constants/index.js";
import { useInView } from 'react-intersection-observer';

const About = () => {
    // Hook para detectar se o elemento está na viewport
    const { ref: leftTextRef, inView: isLeftTextVisible } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    const { ref: rightContentRef, inView: isRightContentVisible } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <div className="flex flex-col md:flex-row bg-black">
            {/* Texto do lado esquerdo fixo com fade-in */}
            <div 
                className="md:sticky mx-20 md:mx-14 md:w-52 md:top-0 md:h-screen flex items-center text-white p-4 md:px-8 lg:px-16 mb-10 md:mb-0"
                ref={leftTextRef}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLeftTextVisible ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-start">
                        From <span className="text-bruns">idea </span>
                        to <span className="text-bruns">digital
                            solutions
                        </span>...
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg font-medium mt-4">
                        We make unique ideas and we transform them into tangible results
                    </p>
                </motion.div>
            </div>

            {/* Conteúdo do lado direito que rola com fade-in */}
            <div 
                className="flex-1 p-4 md:p-6 lg:p-8 lg:mx-20 xl:mx-32 space-y-6 md:space-y-8"
                ref={rightContentRef}
            >
                {/* Imagens e textos */}
                {sections.map((section) => (
                    <div key={section.id} className="space-y-4 max-w-2xl mx-auto">
                        {/* Imagem Animada */}
                        <div className="w-full h-64 md:h-72 lg:h-80 mx-auto flex justify-center">
                            <Lottie 
                                animationData={section.animation}
                                loop={true}
                                autoplay={true}
                            />
                        </div>
                        {/* Texto da Seção */}
                        <motion.div
                            className="text-white w-full mx-auto text-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isRightContentVisible ? 1 : 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2">{section.title}</h2>
                            <p className="text-sm md:text-base lg:text-lg font-normal">
                                {section.content}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
