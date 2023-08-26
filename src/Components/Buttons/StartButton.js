import React from 'react';

const StartButton = ({ option, onClick, disabled }) => {
    return (
        <button className='startbtn' disabled={disabled} onClick={onClick}>
            {option}
        </button>
    );
};

export default StartButton;