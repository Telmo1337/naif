import { useState, useEffect } from 'react';
import { navigation } from '../constants';
import { motion } from 'framer-motion';

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

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [, setScrollY] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('transparent');

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 250) {
            setBackgroundColor('bg-black');
        } else {
            setBackgroundColor('bg-transparent');
        }

        setScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${backgroundColor}`}
        >
            <div className="flex items-center justify-between px-5 lg:mx-3 md:mx-5 lg:px-5 xl:px-7 py-4">
                <a
                    className={`block w-[12rem] text-4xl font-medium uppercase ${backgroundColor === 'bg-black' ? 'text-white' : 'text-black'}`}
                    href={'/'}
                >
                    naïf
                </a>

                <div className="flex-1 lg:hidden" />

                <div className="lg:hidden z-50">
                    <button
                        onClick={toggleMenu}
                        className="text-2xl focus:outline-none"
                    >
                        <svg
                            className={`w-12 h-12 transition-colors duration-300 ${isMenuOpen ? 'text-white' : 'text-black'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>

                <nav className="hidden lg:flex lg:space-x-4 lg:ml-auto">
                    {navigation.map((item) => (
                        <a
                            className={`block relative group transition-all duration-300 ease-in-out mx-2 px-2 py-2 uppercase font-medium ${backgroundColor === 'bg-black' ? 'text-white' : 'text-black'}`}
                            key={item.id}
                            href={item.url}
                        >
                            <span className={`bg-left-bottom bg-gradient-to-r from-bruns to-bruns bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ${backgroundColor === 'bg-black' ? 'text-white' : 'text-black'}`}>
                                {item.title}
                            </span>
                        </a>
                    ))}
                    <a
                        className={`block relative group transition-all duration-300 ease-in-out px-2 py-2 uppercase font-medium rounded-sm hover:bg-bruns hover:text-white ${backgroundColor === 'bg-black' ? 'text-white' : 'text-black'}`}
                        href="#contact"
                    >
                        <span className={`bg-left-bottom bg-gradient-to-r from-bruns to-bruns bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ${backgroundColor === 'bg-black' ? 'text-white' : 'text-black'}`}>
                            Contact us
                        </span>
                    </a>
                </nav>
            </div>

            {isMenuOpen && (
                <div
                    className="fixed -inset-1 bg-black opacity-100 lg:hidden z-40"
                    onClick={toggleMenu}
                    aria-hidden="true"
                />
            )}

            <nav
                className={`fixed top-0 left-0 right-0 bottom-0 lg:hidden text-white flex justify-center items-center text-center transition-transform duration-800 ease-in-out z-40 ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col items-center mt-20 space-y-6 sm:text-2xl md:text-2xl tracking-widest">
                    {navigation.map((item) => (
                        <a
                            className={`block relative group transition-all duration-300 ease-in-out px-2 py-2 uppercase font-medium ${backgroundColor === 'bg-black' ? 'text-white' : 'text-black'}`}
                            key={item.id}
                            href={item.url}
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className={`bg-left-bottom bg-gradient-to-r from-bruns to-bruns bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ${backgroundColor === 'bg-black' ? 'text-white' : 'text-black'}`}>
                                {item.title}
                            </span>
                        </a>
                    ))}
                    <a
                        className={`block relative group transition-all duration-300 ease-in-out px-2 py-2 uppercase font-medium  hover:bg-bruns hover:text-white ${backgroundColor === 'bg-black' ? 'text-white' : 'text-black'}`}
                        href="#"
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className={`bg-left-bottom bg-gradient-to-r from-bruns to-bruns bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ${backgroundColor === 'bg-black' ? 'text-white' : 'text-black'}`}>
                            Contact us
                        </span>
                    </a>
                </div>
            </nav>
        </motion.div>
    );
}
