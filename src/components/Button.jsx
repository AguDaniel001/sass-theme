import React from 'react'

function Button({ text, className, onClick, ...rest }) {
  return (
    <button className={`${className} ${className}`} onClick={onClick} {...rest}>{text}</button>
  );
}

export default Button;

