//imr
import React from 'react';
import '../style/Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--Primary', 'btn__outline'];

const SIZES = ['btn--medium', 'btn__large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0]

    return (
      <Link to='/contact' className='btn-mobile'>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        >
          {children}
        </button>
      </Link>
    )
};