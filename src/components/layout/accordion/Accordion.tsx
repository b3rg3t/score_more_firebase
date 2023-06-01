import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { FaChevronDown } from "react-icons/fa";

interface AccordionProps {
  children: React.ReactElement;
  title: string;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      onOpening={() => setIsOpen(true)}
      onClosing={() => setIsOpen(false)}
      trigger={
        <div className="d-flex justify-content-between accordion-header">
          <span className="fw-bold">{title}</span>
          <span className={isOpen ? "rotate" : "arrow-down"}>
            <FaChevronDown />
          </span>
        </div>
      }
      classParentString="hallelulja"
      triggerClassName="hallelulja"
      contentOuterClassName="border-top border-bottom mb-1"
    >
      {children}
    </Collapsible>
  );
};

export default Accordion;
