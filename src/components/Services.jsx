import { useInView } from 'react-intersection-observer';
import { GiSmartphone, GiSwordBrandish } from 'react-icons/gi';
import { TbCrosshair } from 'react-icons/tb';
import { FaCode } from "react-icons/fa6";
import { FaShoppingCart, FaTasks } from "react-icons/fa";


const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Set to true if you only want the animation to trigger once
    threshold: 0.4, // Adjust the threshold based on when you want the animation to trigger
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center my-32 transition-opacity duration-700 ease-in-out ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <h1 className="text-6xl font-bold mb-8">
        Our <i className="text-3xl">trés bien</i>{' '}
        <span className="text-8xl text-bruns bg-left-bottom bg-gradient-to-r from-bruns to-bruns bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          services
        </span>
      </h1>
      <p className="text-xl font-medium">
        We work with different types of technology and methods; feel free to check all of them
      </p>
      <div className="grid grid-cols-3 gap-28 my-20 mx-4">
        <div className="flex flex-col justify-center items-center border-l-0 border-t-0 border-r-2 border-b-2 p-4 border-black rounded-br-sm shadow-lg hover:scale-105 transition-all hover:bg-bruns hover:text-white duration-1000 ease-in-out">
          <GiSmartphone size={88} />
          <h1 className="text-2xl pl-5 mt-4 font-semibold">Network Management</h1>
          <p className="text-lg py-10 font-normal text-start">
            The creation and management of a company’s social media presence is crucial nowadays! Customers are everywhere, and most of them are on social media
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border-l-0 border-t-0 border-r-2 border-b-2 p-4 border-black rounded-br-sm shadow-lg hover:scale-110 transition-all hover:bg-bruns hover:text-white duration-1000 ease-in-out">
          <TbCrosshair size={88} />
          <h1 className="text-2xl pl-5 mt-4 font-semibold">ADS | Paid Traffic</h1>
          <p className="text-lg py-10 font-normal text-start">
            Website optimization to improve organic search ranking on Google and creation of online advertising and management of paid ranking services on Google
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border-l-0 border-t-0 border-r-2 border-b-2 p-4 border-black rounded-br-sm shadow-lg hover:scale-105 transition-all hover:bg-bruns hover:text-white duration-1000 ease-in-out">
          <GiSwordBrandish size={88} />
          <h1 className="text-2xl pl-5 mt-4 font-semibold">Branding</h1>
          <p className="text-lg py-10 font-normal text-start">
            A branding project, when followed from its inception, is more than just designing a logo; it is a strategic process
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border-l-0 border-t-0 border-r-2 border-b-2 p-4 border-black rounded-br-sm shadow-lg hover:scale-105 transition-all hover:bg-bruns hover:text-white duration-1000 ease-in-out">
        <FaCode size={88}/>
          <h1 className="text-2xl pl-5 mt-4 font-semibold">Web Design</h1>
          <p className="text-lg py-10 font-normal text-start">
          Development of institutional websites using current technologies
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border-l-0 border-t-0 border-r-2 border-b-2 p-4 border-black rounded-br-sm shadow-lg hover:scale-110 transition-all hover:bg-bruns hover:text-white duration-1000 ease-in-out">
          <FaShoppingCart size={88} />
          <h1 className="text-2xl pl-5 mt-4 font-semibold">E-Commerce</h1>
          <p className="text-lg py-10 font-normal text-start">
          Development of conversion-oriented websites using current technologies and strategies
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border-l-0 border-t-0 border-r-2 border-b-2 p-4 border-black rounded-br-sm shadow-lg hover:scale-105 transition-all hover:bg-bruns hover:text-white duration-1000 ease-in-out">
          <FaTasks size={88} />
          <h1 className="text-2xl pl-5 mt-4 font-semibold">Plano de Marketing</h1>
          <p className="text-lg py-10 font-normal text-start">
          The implementation of this plan aims to improve resource management, execute campaigns effectively, and enhance the company`s position in the market in an organized and strategic manner
          </p>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-8">
        and many
        <span className="text-8xl text-bruns bg-left-bottom bg-gradient-to-r from-bruns to-bruns bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          more
        </span>
        services
      </h1>
    </div>
  );
};

export default Services;
