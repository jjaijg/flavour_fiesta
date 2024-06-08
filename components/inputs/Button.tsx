import React from 'react';

type Props = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<Props> = ({ label, onClick, className }) => {
  return (
    <button
      className={`bg-gradient-to-b from-gray-700 to-gray-900 p-2 text-white rounded uppercase font-medium ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
