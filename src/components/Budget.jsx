import { useInView } from 'react-intersection-observer';

const Budget = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to true if you only want the animation to trigger once
    threshold: 0.3, // Adjust the threshold based on when you want the animation to trigger
  });

  return (
    <section 
      ref={ref}
      className={`bg-transparent transition-transform duration-500 ease-in-out ${inView ? 'transform translate-y-0' : 'transform translate-y-10'}`}
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
                name="name" 
                id="name" 
                className="bg-transparent text-black text-lg block w-full py-2" 
                placeholder="First name *" 
                required 
              />
            </div>
            <div className="w-full">
              <input 
                type="text" 
                name="name" 
                id="name" 
                className="bg-transparent text-black text-lg block w-full py-2" 
                placeholder="Last name *" 
                required 
              />
            </div>
            <div className="w-full">
              <input 
                type="text" 
                name="name" 
                id="name" 
                className="bg-transparent text-black text-lg block w-full py-2" 
                placeholder="Business email *" 
                required 
              />
            </div>
            <div className="w-full">
              <input 
                type="text" 
                name="name" 
                id="name" 
                className="bg-transparent text-black text-lg block w-full py-2" 
                placeholder="Phone number" 
                required 
              />
            </div>
            <div className="w-full">
              <input 
                type="text" 
                name="name" 
                id="name" 
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
                name="name" 
                id="name" 
                className="bg-transparent text-black text-lg block w-full py-2" 
                placeholder="What do you want to achieve? *" 
                required 
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="category" className="bg-transparent text-black text-xl font-medium block w-full py-2">
                What is your budget
              </label>
              <select id="category" className="bg-transparent text-black text-md block w-full py-2">
                <option selected>Select budget</option>
                <option value="TV">Up to $50,000</option>
                <option value="PC">$50,000 to $100,000</option>
                <option value="GA">$100,000 to $250,000</option>
                <option value="PH">Over $250,000</option>
                <option value="PH">Cannot disclose</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <textarea 
                id="comment" 
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
