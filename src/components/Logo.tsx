import React from 'react';

interface LogoProps {
  className?: string;
  size?: number; // controls width and height
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 36 }) => {
  return (
    <img
      src="/dzine.png" // your PNG in public folder
      alt="Dzine Logo"
      className={className}
      width={size}
      height={size}
    />
  );
};

export default Logo;
