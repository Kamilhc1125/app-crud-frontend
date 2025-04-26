import React from 'react';

const Button = ({ id, title, brandColor = "btn-accent", onClick, disabled }) => {
  return (
    <button
      id={id} 
      className={`btn ${brandColor} round-shadow`} 
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  )
}

export default Button;
