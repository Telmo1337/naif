import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { sections } from "../constants/index.js";
import { useInView } from 'react-intersection-observer';

const About = () => {
    // Hook para detectar se o elemento está na viewport
    const { ref: leftTextRef, inView: isLeftTextVisible } = useInView({
        triggerOnce: false, // Permite que a animação seja acionada sempre que o elemento entra na viewport
        threshold: 0.5, // Percentual de visibilidade necessário para disparar
    });

    const { ref: rightContentRef, inView: isRightContentVisible } = useInView({
        triggerOnce: false, // Permite que a animação seja acionada sempre que o elemento entra na viewport
        threshold: 0.3, // Percentual de visibilidade necessário para disparar
    });

    return (
        <div className="flex bg-black">
            {/* Texto do lado esquerdo fixo com fade-in */}
            <div 
                className="sticky top-0 h-screen flex items-center text-white p-4 mx-32"
                ref={leftTextRef}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLeftTextVisible ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-6xl font-medium w-60 text-start">
                        From <span className="text-bruns">idea </span>
                        to <span className="text-bruns">digital
                            solutions
                        </span>...
                    </h1>
                    <p className="text-base font-medium w-60 text-end"> 
                        We make unique ideas and we transform them into tangible results
                    </p>
                </motion.div>
            </div>

            {/* Conteúdo do lado direito que rola com fade-in */}
            <div 
                className="flex-1 p-4 space-y-8 pt-20"
                ref={rightContentRef}
            >
                {/* Imagens e textos */}
                {sections.map((section) => (
                    <div key={section.id} className="space-y-4">
                        {/* Imagem Animada */}
                        <div className="w-96 h-72 mx-auto">
                            <Lottie 
                                animationData={section.animation}
                                loop={true} // Opcional: Se você quiser que a animação repita
                                autoplay={true} // Opcional: Para garantir que a animação comece automaticamente
                            />
                        </div>
                        {/* Texto da Seção */}
                        <motion.div
                            className="py-16 text-white w-8/12 mx-auto text-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isRightContentVisible ? 1 : 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-4xl font-medium">{section.title}</h2>
                            <p className="text-base font-normal">
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