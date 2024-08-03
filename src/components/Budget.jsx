
import { useInView } from 'react-intersection-observer';

const Budget = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section 
      ref={ref}
      className={`my-20 bg-transparent transition-transform duration-500 ease-in-out overflow-x-hidden ${inView ? 'transform translate-y-0' : 'transform translate-y-10'}`}
    >
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <span 
          className={`text-black text-7xl font-semibold bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_5px] bg-no-repeat hover:bg-[length:100%_5px] transition-all duration-500 ease-out ${inView ? 'opacity-100' : 'opacity-50'}`}
        >
          Get a quote
        </span>
        <p 
          className={`my-10 text-xl font-medium text-black ${inView ? 'opacity-100' : 'opacity-50'} transition-opacity duration-500`}
        >
          Building a new product or struggling with an existing project? We can help.
        </p>
        <form action="#">
          <p className="mb-2 text-3xl font-semibold text-black">
            About you
          </p>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <input 
                type="text" 
                name="first-name" 
                id="first-name" 
                className="bg-transparent text-black text-lg block w-full py-2" 
                placeholder="First name *" 
                required 
              />
            </div>
            <div className="w-full">
              <input 
                type="text" 
                name="last-name" 
                id="last-name" 
                className="bg-transparent text-black text-lg block w-full py-2" 
                placeholder="Last name *" 
                required 
              />
            </div>
            <div className="w-full">
              <input 
                type="text" 
                name="business-email" 
                id="business-email" 
                className="bg-transparent text-black text-lg block w-full py-2" 
                placeholder="Business email *" 
                required 
              />
            </div>
            <div className="w-full">
              <input 
                type="text" 
                name="phone-number" 
                id="phone-number" 
                className="bg-transparent text-black text-lg block w-full py-2" 
                placeholder="Phone number" 
                required 
              />
            </div>
            <div className="w-full">
              <input 
                type="text" 
                name="how-did-you-hear-about-us" 
                id="how-did-you-hear-about-us" 
                className="bg-transparent text-black text-lg block w-full py-2" 
                placeholder="How did you hear about us? *" 
                required 
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <p className="mt-10 text-3xl font-semibold text-black">
              About the project
            </p>
            <div className="sm:col-span-2">
              <input 
                type="text" 
                name="project-goal" 
                id="project-goal" 
                className="bg-transparent text-black text-lg block w-full py-2" 
                placeholder="What do you want to achieve? *" 
                required 
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="budget" className="bg-transparent text-black text-xl font-medium block w-full py-2">
                What is your budget
              </label>
              <select id="budget" className="bg-transparent text-black text-md block w-full py-2">
                <option value="">Select budget</option>
                <option value="up-to-50000">Up to $50,000</option>
                <option value="50000-to-100000">$50,000 to $100,000</option>
                <option value="100000-to-250000">$100,000 to $250,000</option>
                <option value="over-250000">Over $250,000</option>
                <option value="cannot-disclose">Cannot disclose</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <textarea 
                id="project-description" 
                rows="8"
                className="px-2 w-full text-sm text-black bg-transparent block py-2"
                placeholder="Tell us about your project *" 
                required
              ></textarea>
            </div>
          </div>
          <button 
            type="submit" 
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-xl font-medium text-center text-white bg-black rounded-sm hover:bg-bruns hover:text-black transition-all ease-in-out duration-500"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Budget;
