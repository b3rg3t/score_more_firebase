import React from "react";

interface WrapperPageProps {
  id: string;
  children: React.ReactElement;
  className?: string;
}
const WrapperPage = ({ id, className, children }: WrapperPageProps) => (
  <section id={id} className={`flex-1 w-100 p-1 ${className ? className : ""}`}>
    {children}
  </section>
);

export default WrapperPage;
