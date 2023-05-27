import React from "react";

interface WrapperMainProps {
  children: React.ReactElement;
}

const WrapperMain = ({ children }: WrapperMainProps) => <section className="px-1">{children}</section>;

export default WrapperMain;
