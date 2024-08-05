

const GetInTouch = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-4xl p-6 bg-black border rounded-lg shadow">
        <h1 className="mb-8 text-2xl font-bold tracking-tight text-white mt-4">Some clients call us their
          <span className="pl-2 text-4xl text-bruns bg-left-bottom bg-gradient-to-r from-bruns to-bruns bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            secret weapon
          </span>
        </h1>

        <p className="mb-10 font-normal text-white text-lg text-wrap">Either looking for a Team Extension, an Ongoing Flexible collaboration or a small Pilot to start with, let us guide you through the process.</p>
        <a href="#" className="mb-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-sm hover:bg-bruns ">
          Get in Touch
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default GetInTouch
