import { useState } from 'react';

import { questions } from '../constants';
import SingleQuestion from '../components/SingleQuestion';

const Faq = () => {

    const [cards] = useState(questions);



  return (
    <div className="max-w-4xl mx-auto py-20 px-8 my-20 rounded-lg bg-slate-200">
        <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 sm:mb-6 md:mb-8 text-center">
            Frequently asked questions
        </h1>

        <div className="grid grid-cols-1 p-2">
            {cards.map((card, index) =>(
                <SingleQuestion {...card} key={index}/>
            ))}

        </div>
    </div>
  )
}

export default Faq
