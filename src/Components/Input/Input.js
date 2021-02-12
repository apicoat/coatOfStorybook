import React from 'react';
import './Input.css';

function Input(props) {
    const { variant = 'input1', ...rest } = props;

    return (
        <input className={ `input ${variant}`} placeholder="Enter input" {...rest} />
    )
}

export default Input
