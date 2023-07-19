import React, { } from 'react';

const Button = ({text, style}) => {
    return (
        <button className={`rounded-lg border-transparent py-3 px-4 text-base font-medium  cursor-pointer transition border duration-250 focus:outline-none ${style}`}>
            {text}
        </button>
    )
}

export default Button;