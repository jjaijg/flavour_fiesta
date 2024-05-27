import React from "react";

type Props = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<Props> = ({ label, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
