import React, { useState } from 'react';
import { setAdminDashboard } from '../features/admin';
import { useDispatch } from 'react-redux';

const NewExam: React.FC = () => {
    // State to store questions, their options, and the correct answer index
    const [questions, setQuestions] = useState<
        { questionText: string; options: string[]; correctAnswerIndex: number | null }[]
    >([{ questionText: '', options: [''], correctAnswerIndex: null }]);

    const dispatch = useDispatch();

    const handleAddOption = (index: number) => {
        const newQuestions = [...questions];
        newQuestions[index].options.push(''); // Add an empty option for this question
        setQuestions(newQuestions);
    };

    const handleChangeQuestion = (index: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[index].questionText = value;
        setQuestions(newQuestions);
    };

    const handleChangeOption = (questionIndex: number, optionIndex: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options[optionIndex] = value;
        setQuestions(newQuestions);
    };

    const handleSetCorrectAnswer = (questionIndex: number, optionIndex: number) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].correctAnswerIndex = optionIndex; // Set the correct answer index
        setQuestions(newQuestions);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(questions);
        // Add the logic to submit the form data
    };

    const handleAddQuestion = () => {
        setQuestions([...questions, { questionText: '', options: [''], correctAnswerIndex: null }]);
    };

    return (
        <div className="text-blue-950 p-4 shadow-shadow bg-gray-50">
            <p className="text-lg text-orange-500 font-bold text-center mb-2">New Exam</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label>Exam title :</label>
                    <input
                        type="text"
                        placeholder="title"
                        className="outline-none border-[1px] border-orange-200 ml-2 rounded-md pl-2 focus:border-blue-200"
                    />
                </div>
                <div className="mb-2">
                    <label>Exam level :</label>
                    <input
                        type="text"
                        placeholder="title"
                        className="outline-none border-[1px] border-orange-200 rounded-md pl-2 focus:border-blue-200"
                    />
                </div>
                {questions.map((question, questionIndex) => (
                    <div key={questionIndex} className="mb-4">
                        <div>
                            <label>Question {questionIndex + 1}:</label>
                            <textarea
                                className="w-full border-orange-200 border-[2px] outline-none focus:border-blue-200 px-2 rounded-md"
                                value={question.questionText}
                                onChange={(e) => handleChangeQuestion(questionIndex, e.target.value)}
                                placeholder={`Question ${questionIndex + 1}`}
                            />
                        </div>

                        <div className="flex">
                            <div>
                                {question.options.map((option, optionIndex) => (
                                    <div key={optionIndex} className="flex items-center gap-2 mt-2">
                                        <label>{optionIndex + 1}:</label>
                                        <input
                                            type="text"
                                            className="w-[600px] focus:border-blue-200 border-orange-200 border-[2px] px-2 rounded-md outline-none"
                                            value={option}
                                            onChange={(e) =>
                                                handleChangeOption(questionIndex, optionIndex, e.target.value)
                                            }
                                            placeholder={`Option ${optionIndex + 1}`}
                                        />
                                        {/* Radio button to select the correct answer */}
                                        <input
                                            type="radio"
                                            name={`question-${questionIndex}`}
                                            checked={question.correctAnswerIndex === optionIndex}
                                            onChange={() => handleSetCorrectAnswer(questionIndex, optionIndex)}
                                            className="ml-2"
                                        />
                                        <span className="text-sm text-gray-600">Answer</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-end cursor-pointer">
                                <p
                                    className="bg-green-500 px-3 mx-2 rounded-md hover:bg-green-600 transition duration-300 text-white"
                                    onClick={() => handleAddOption(questionIndex)}
                                >
                                    Add
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    type="button"
                    className="bg-orange-500 px-4 py-1 rounded-md text-white font-semibold"
                    onClick={handleAddQuestion}
                >
                    Add Question
                </button>

                <div className="flex gap-4 m-2 text-white font-semibold">
                    <button type="submit" className="bg-primaryBtn px-4 py-1 rounded-md">
                        Submit
                    </button>
                    <p
                        className="bg-green-600 cursor-pointer px-4 py-1 rounded-md"
                        onClick={() => dispatch(setAdminDashboard("exams"))}
                    >
                        Cancel
                    </p>
                </div>
            </form>
        </div>
    );
};

export default NewExam;