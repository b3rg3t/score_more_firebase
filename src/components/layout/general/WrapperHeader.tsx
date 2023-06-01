import React from "react";

interface WrapperHeaderProps {
  children: React.ReactElement;
  title: string;
}

const WrapperHeader = ({ children, title }: WrapperHeaderProps) => (
  <header className="d-flex justify-content-between px-1 pb-1">
    <h4>{title}</h4>
    {children}
  </header>
);

export default WrapperHeader;
