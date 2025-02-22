import React from 'react';
import styled from './button.module.css';

const Button = ({children, ...props}) => {
    return (
        <button className={styled.btn} {...props}>
            {children}
        </button>
    );
}

export default Button;