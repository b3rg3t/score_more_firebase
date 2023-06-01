import React from "react";

interface WrapperListProps {
  children: React.ReactElement;
}

const WrapperList = ({ children }: WrapperListProps) => (
  <ul className="list-unstyled w-100 flex-1">{children}</ul>
);

export default WrapperList;
