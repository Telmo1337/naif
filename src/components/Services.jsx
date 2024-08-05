import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GiSmartphone, GiSwordBrandish } from "react-icons/gi";
import { TbCrosshair } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { FaShoppingCart, FaTasks } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
};

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col items-center my-16 md:my-24 lg:my-32 transition-opacity duration-700 ease-in-out"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
        Our <i className="text-xl md:text-2xl lg:text-3xl">trés bien</i>{" "}
        <span className="text-5xl md:text-6xl lg:text-8xl text-bruns bg-left-bottom bg-gradient-to-r from-bruns to-bruns bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          services
        </span>
      </h1>
      <p className="text-base md:text-lg lg:text-xl font-medium text-center md:text-left">
        We work with different types of technology and methods; feel free to check all of them
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-28 my-10 md:my-16 mx-4">
        <div className="services text-center md:text-left">
          <GiSmartphone size={64} className="mx-auto md:mx-0" />
          <h1 className="text-xl md:text-2xl mt-4 font-semibold">Network Management</h1>
          <p className="text-base md:text-lg py-6 md:py-8">
            The creation and management of a company’s social media presence is crucial nowadays! Customers are everywhere, and most of them are on social media
          </p>
        </div>
        <div className="services text-center md:text-left">
          <TbCrosshair size={64} className="mx-auto md:mx-0" />
          <h1 className="text-xl md:text-2xl mt-4 font-semibold">ADS | Paid Traffic</h1>
          <p className="text-base md:text-lg py-6 md:py-8">
            Website optimization to improve organic search ranking on Google and creation of online advertising and management of paid ranking services on Google
          </p>
        </div>
        <div className="services text-center md:text-left">
          <GiSwordBrandish size={64} className="mx-auto md:mx-0" />
          <h1 className="text-xl md:text-2xl mt-4 font-semibold">Branding</h1>
          <p className="text-base md:text-lg py-6 md:py-8">
            A branding project is more than just designing a logo; it is a strategic process
            that involves the creation of a brand identity, brand positioning, and brand architecture
          </p>
        </div>
        <div className="services text-center md:text-left">
          <FaCode size={64} className="mx-auto md:mx-0" />
          <h1 className="text-xl md:text-2xl mt-4 font-semibold">Web Design</h1>
          <p className="text-base md:text-lg py-6 md:py-8">
            Development of institutional websites using current technologies 
            which aim to increase the company’s visibility on the internet.
            This is done through the creation of websites using ReactJs, NextJs and others
          </p>
        </div>
        <div className="services text-center md:text-left">
          <FaShoppingCart size={64} className="mx-auto md:mx-0" />
          <h1 className="text-xl md:text-2xl mt-4 font-semibold">E-Commerce</h1>
          <p className="text-base md:text-lg py-6 md:py-8">
            Development of conversion-oriented websites using current technologies and strategies
            that aim to increase sales and customer loyalty through the online store such as: WooCommerce, Shopify, Magento, and others
          </p>
        </div>
        <div className="services text-center md:text-left">
          <FaTasks size={64} className="mx-auto md:mx-0" />
          <h1 className="text-xl md:text-2xl mt-4 font-semibold">Marketing Plan</h1>
          <p className="text-base md:text-lg py-6 md:py-8">
            The implementation of this plan aims to improve resource management, execute campaigns effectively, and enhance the company’s position in the market in an organized and strategic manner
          </p>
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
        and many{" "}
        <span className="text-5xl md:text-6xl lg:text-8xl text-bruns bg-left-bottom bg-gradient-to-r from-bruns to-bruns bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          more
        </span>{" "}
        services <br />. <br /> . <br /> . <br /> . <br /> . <br /> . 
      </h1>
    </motion.div>
  );
};

export default Services;
