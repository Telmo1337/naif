import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import { useInView } from 'react-intersection-observer';

const AfterHero = () => {
  // Create an inView ref to monitor when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to true if you only want the animation to trigger once
    threshold: 0.2, // Adjust the threshold based on when you want the animation to trigger
  });

  return (
    <div className="bg-black">
      <div
        ref={ref}
        className={`w-full max-w-screen-xl px-6 py-20 pb-20 mx-auto mb-10 gap-16 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 fade-in ${inView ? 'visible' : ''}`}
      >
        <div className='sticky-container'>
          <div className="text-start sticky-section">
            <img src={img5} alt="" className="opacity" />
            <span className="underline-afterhero">
              Build your brand with us
            </span>
          </div>
        </div>

        <div className="text-start">
          <img src={img1} alt="" className="opacity" />
          <span className="underline-afterhero">
            Get inspired by our work
          </span>
        </div>
        
        <div className="text-start">
          <img src={img3} alt="" className="opacity" />
          <span className="underline-afterhero">
            We believe in your ideas and we make them happen
          </span>
        </div>
      
        <div className='sticky-container'>
          <div className="text-start sticky-section">
            <img src={img2} alt="" className="opacity" />
            <span className="underline-afterhero">
              The road to success is just a click away
            </span>
          </div>
        </div>

        <div className="text-start">
          <img src={img4} alt="" className="opacity" />
          <span className="underline-afterhero">
            We are here to help you grow
          </span>
        </div>
        
        <div className='sticky-container'>
          <div className="text-start sticky-section-other">
            <img src={img6} alt="" className="opacity" />
            <span className="underline-afterhero">
              Connecting people through technology
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterHero;
