import React, { useState } from 'react';
import Card from './Card';
import { quizQuestions } from '../Functions/quizQuestions';
import StartButton from './Buttons/StartButton';

const Quiz = ({setIsStart, isStart}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [disabledOptions, setDisabledOptions] = useState([]);

    const handleOptionClick = (selectedOption) => {
        const currentCorrectOption = quizQuestions[currentQuestion].answer;
        if (selectedOption === currentCorrectOption) {
            setScore(score + 1);
        }

        setDisabledOptions([...disabledOptions, selectedOption]);
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <>
            {currentQuestion < quizQuestions.length ? (
                <Card
                    question={quizQuestions[currentQuestion].question}
                    options={quizQuestions[currentQuestion].options}
                    onClick={handleOptionClick}
                    disabledOptions={disabledOptions}
                />
            ) : (
                <div>
                    <h2>Quiz App</h2>
                    <div className='result'>
                        <h3>You have answered {score} / {quizQuestions.length} correctly!</h3>
                    </div>

                    <div style={{
                        marginTop : "60px"
                    }}>
                        <StartButton option={"Start Quiz"} onClick={() => setIsStart(!isStart)} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Quiz;