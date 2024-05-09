import React, { useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  varient?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, varient }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
    //   className={(varient === 'primary') ? 'primary-button' : 'secondary-button'}
    style={{
        backgroundColor: varient === 'primary' ? (isHovered ? '#4E4E4E' : '#1C1C1C') : (isHovered ? '#1F1F1F' : '#FFFFFF')
    }}
    className={`${varient === 'primary' ? 'text-white' : ''} `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
