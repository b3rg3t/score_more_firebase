import React from "react";

interface WrapperInputProps {
  children: React.ReactElement;
  label: string;
  htmlFor: string;
}

const WrapperInput = ({ children, label, htmlFor }: WrapperInputProps) => {
  return (
    <div>
      <label htmlFor={htmlFor}>
        {label}
        {children}
      </label>
    </div>
  );
};

export default WrapperInput;
