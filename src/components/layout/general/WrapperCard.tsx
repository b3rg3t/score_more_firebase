import React from "react";

interface WrapperCardProps {
  children: React.ReactElement;
}

const WrapperCard = ({ children }: WrapperCardProps) => (
  <li className="bg-white text-black mb-1 rounded p-1 box-shadow">
    {children}
  </li>
);

export default WrapperCard;
