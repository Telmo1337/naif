
import { techData } from '../constants';

const Tech = () => {
    return (
        <div>
            <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 sm:mb-6 md:mb-8">Tools & Technology  
                    <span className='pl-1 text-bruns bg-left-bottom bg-gradient-to-r from-bruns to-bruns bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                        stack
                    </span>
                </h1>
                <p className="text-black text-opacity-95 text-2xl font-medium mt-4">
                    The right tooling is key for an efficient and successful collaboration. We take it seriously.
                </p>
            </div>
            <div className="flex items-center justify-center my-20">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2  lg:grid-cols-3 ">
                    {techData.map((tech, index) => (
                        <div key={index}>
                            <div className="flex flex-row gap-2 ">
                                {tech.tools.map(tool => (
                                    <img 
                                        key={tool.name} 
                                        src={tool.icon} 
                                        alt={tool.name} 
                                    />
                                ))}
                            </div>
                            <h1 className="text-tech-h1">{tech.category}</h1>
                            <p className="text-tech-p">
                                {tech.tools.map(tool => tool.name).join(', ')}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tech;
