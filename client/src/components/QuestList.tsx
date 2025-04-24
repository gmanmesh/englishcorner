import React from 'react';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const QuestList: React.FC = () => {

    const evaluation = [
        {
            "questionNumber": 1,
            "question": "Manager: Where’s Mr Davidson?<br>Assistant: Oh, he’s   London today.",
            "options": [ 'A like', 'B like to', 'C want', 'D want to'],
            "correctAnswer": "like"
        },
        {
            "questionNumber": 2,
            "question": "What is the capital city of Kenya",
            "options": ['Nairobi', 'Mombasa', 'Kisumu'],
            "correctAnswer": "Nairobi"
        },
        {
            "questionNumber": 3,
            "question": "What is the capital city of Uganda",
            "options": ['Kampala', 'Entebbe', 'Jinja'],
            "correctAnswer": "Kampala"
        },
        {
            "questionNumber": 4,
            "question": "What is the capital city of Somalia",
            "options": ['Mogadishu', 'Kismayo', 'Hargeisa'],
            "correctAnswer": "Mogadishu"
        },
        {
            "questionNumber": 5,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 6,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 7,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 8,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 9,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 10,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 11,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 12,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 13,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 14,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 15,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 16,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 17,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 18,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 19,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 20,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 21,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 22,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 23,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 24,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 25,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 26,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 27,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 28,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 29,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 30,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 31,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 32,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 33,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 34,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 35,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 36,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 37,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 38,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 39,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 40,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 41,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 42,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 43,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 44,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 45,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 46,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 47,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 48,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 49,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 50,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 51,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 52,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 53,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 54,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 55,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 56,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 57,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 58,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 59,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 60,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 61,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 62,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 63,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 64,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 65,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 66,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 67,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 68,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 69,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        },
        {
            "questionNumber": 70,
            "question": "What is the capital city of South Sudan",
            "options": ['Juba', 'Wau', 'Malakal'],
            "correctAnswer": "Juba"
        }
    ];

    return (
        <div>
            {evaluation.map((question) => (
                <div className='border-b-[1px] p-1 shadow-sm cursor-pointer hover:bg-orange-50 flex justify-between' key={question.questionNumber}>
                    <div>
                        <p><span className='font-bold'>{question.questionNumber}.</span> {question.question}</p>
                        <div className=''>
                            {question.options.map((item, index) => (
                                <div className='ml-3' key={index}>
                                    <span >{index + 1}. </span>{item}
                                </div>
                            ))}
                        </div>
                        <p ><span className='font-bold'>Ans.</span> {question.correctAnswer}</p>
                    </div>
                    <div className='flex flex-col justify-around text-[24px]'>
                        <FiEdit className='text-green-600 transition-transform hover:scale-110 hover:text-green-800' />
                        <RiDeleteBinLine className='text-red-600 hover:text-red-800 transition-transform hover:scale-110' />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default QuestList;
