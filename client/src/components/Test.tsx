import React, { FormEvent, useState } from 'react';
import { FaCertificate } from "react-icons/fa";
import { BiCertification } from "react-icons/bi";
import { evaluation } from '../data/test';
import { useNavigate } from 'react-router-dom';

const Test: React.FC = () => {


    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    /* const [isSubmitted, setIsSubmitted] = useState<boolean>(false); */

    const navigate = useNavigate()

    const handleChange = (questionNumber: number, selectedOption: string) => {
        setSelectedAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[questionNumber - 1] = selectedOption;
            return updatedAnswers;


        });
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(selectedAnswers)
    }

    /*     const handleSubmit = () => {
            setIsSubmitted(true);
        }; */

    /*     const getGrade = (correctAnswersCount: number) => {
            const percentage = (correctAnswersCount / evaluation.length) * 100;
            if (percentage >= 90) return 'A';
            if (percentage >= 80) return 'B';
            if (percentage >= 70) return 'C';
            if (percentage >= 60) return 'D';
            return 'F';
        };
    
        const getResult = () => {
            const correctAnswersCount = evaluation.reduce((count, item, index) => {
                return count + (selectedAnswers[index] === item.correctAnswer ? 1 : 0);
            }, 0);
     */
    /*         const grade = getGrade(correctAnswersCount);
    
            return (
                <div className=''>
                    <h3 className="font-bold">Final Results:</h3>
                    <p>You scored {correctAnswersCount} out of {evaluation.length}</p>
                    <p>Your grade: <strong>{grade}</strong></p>
                    {evaluation.map((item, index) => {
                        const isCorrect = selectedAnswers[index] === item.correctAnswer;
                        return (
                            <div key={index}>
                                <p>Question {item.questionNumber}: {isCorrect ? 'Correct!' : 'Incorrect!'}</p>
                            </div>
                        );
                    })}
                </div>
            );
        }; */

    return (
        <div className='p-2'>
            <p className='font-bold border-b-4 border-orange-100'>Complete the dialogues below by choosing the correct option. </p>
            <form onSubmit={handleSubmit}>
                {evaluation.map((item) => (
                    <div key={item.questionNumber} className='ml-4'>
                        <p><span className='font-bold'>{item.questionNumber}.</span> {item.question}</p>
                        <div className="flex flex-col gap-1 ml-3">
                            {item.options.map((option, index) => (
                                <div
                                    key={index}
                                    className={`cursor-pointer hover:bg-orange-100 rounded-md `}
                                >
                                    <input
                                        type="radio"
                                        id={option}
                                        name={`question-${item.questionNumber}`}
                                        value={option}
                                        checked={selectedAnswers[item.questionNumber - 1] === option}
                                        onChange={() => handleChange(item.questionNumber, option)}
                                        hidden
                                    />

                                    <label className='cursor-pointer flex items-center gap-1' htmlFor={option}><span>{selectedAnswers[item.questionNumber - 1] === option ? <FaCertificate className=' text-orange-400' /> : <BiCertification className=' text-orange-500' />}  </span>{option}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div className='flex gap-4'>
                    <button type='submit' className='bg-blue-800 px-4 py-1 cursor-pointer active:bg-blue-900 text-white'>Submit</button>
                    <p onClick={() => navigate('/users')} className='bg-green-400 cursor-pointer active:bg-green-500 px-4 py-1 text-white '>Cancel</p>
                </div>


            </form>

            {/* Submit Button */}
            {/*         {!isSubmitted && (
                <button
                    onClick={handleSubmit}
                    className="mt-4 p-2 bg-blue-500 text-white rounded "
                    disabled={selectedAnswers.length !== evaluation.length}
                >
                    Submit
                </button>
            )}
 */}
            {/* {isSubmitted && getResult()}  */}
        </div>
    );
};

export default Test;
