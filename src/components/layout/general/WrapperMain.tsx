import React from "react";

interface WrapperMainProps {
  children: React.ReactElement;
}

const WrapperMain = ({ children }: WrapperMainProps) => <section>{children}</section>;

export default WrapperMain;
