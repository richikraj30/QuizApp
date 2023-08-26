import React from 'react';
import Button from './Buttons/Button';
const Card = ({ question, options, onClick }) => {
    return (
        <div className="card">
            <h2 className='heading'>{question}</h2>
            {options?.map((option, index) => (
                <Button
                    key={index}
                    option={option}
                    onClick={() => onClick(option)}
                />
            ))}
        </div>
    );
};

export default Card;