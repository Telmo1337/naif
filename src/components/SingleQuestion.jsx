/* eslint-disable react/prop-types */
import { useState } from 'react';
import { HiOutlinePlus, HiMinus } from 'react-icons/hi';
import '../SingleQuestion.css'; // Import CSS file

const SingleQuestion = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(prevState => !prevState);
    };

    return (
        <div className="p-4">
            <article 
                className="flex items-center justify-between p-4 lg:p-6 cursor-pointer" 
                onClick={toggleAnswer}
            >
                <h2>{question}</h2>
                <button>
                    {showAnswer ? <HiMinus /> : <HiOutlinePlus />}
                </button>
            </article>
            <article 
                className={`answer-container border-t border-black p-4 lg:p-6 ${showAnswer ? 'open' : 'closed'}`}
            >
                <p>{answer}</p>
            </article>
        </div>
    );
};

export default SingleQuestion;
