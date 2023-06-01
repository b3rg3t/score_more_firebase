import React from "react";

interface WrapperHeaderProps {
  children?: React.ReactElement;
  title: string;
  className?: string;
}

const WrapperHeader = ({ children, title, className }: WrapperHeaderProps) => (
  <header
    className={`d-flex justify-content-between px-1 pb-1 ${
      className ? className : ""
    }`}
  >
    <h4>{title}</h4>
    {children}
  </header>
);

export default WrapperHeader;
