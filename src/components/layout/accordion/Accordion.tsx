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
    <div className="bg-white rounded p-1 mb-1 box-shadow text-dark">
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
        classParentString="accordion"
      >
        {children}
      </Collapsible>
    </div>
  );
};

export default Accordion;
