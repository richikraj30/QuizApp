import React from 'react';

const Button = ({ option, onClick, disabled }) => {
    return (
        <button className='btn' disabled={disabled} onClick={onClick}>
            {option}
        </button>
    );
};

export default Button;