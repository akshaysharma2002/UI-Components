//accordion.js
import React, { useState } from "react";

const AccordionItem = ({
  title,
  content,
  disabled,
  isOpenByDefault,
  hasSubAccordion,
  subAccordionData,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  const toggleAccordion = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };
  const subAccordionWrapper = {
    borderTop: "1px solid #ddd",
    padding: "10px",
    paddingTop: "0px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "small",
  }
  const disabledSytle = {
    pointerEvents: 'none',
    opacity:.30,
  }
  const accordionButtonStyle = disabled ? disabledSytle : {};

  return (
    <div>
      <div className="accordion-item" style={accordionButtonStyle}>
        <button
          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleAccordion}
          aria-expanded={isOpen ? "true" : "false"}
        >
          {typeof title === "function" ? title() : <h5>{title}</h5> }
        </button>

        <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
          <div className={`accordion-body`}>
            {typeof content === "function" ? content() : content }
            </div>
          {hasSubAccordion && (
            <div style={subAccordionWrapper}>
              <SubAccordion subAccordionData={subAccordionData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ accordionData }) => {
  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpenByDefault={item.isOpenByDefault}
          hasSubAccordion={item.hasSubAccordion}
          subAccordionData={item.subAccordionData}
          disabled={item.disabled}
        />
      ))}
    </div>
  );
};

const SubAccordion = ({subAccordionData, onToggle}) => (
  <div className="accordion">
    {subAccordionData.map((item, index) => (
      <div key={index} >
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
          hasSubAccordion={false}
          isOpenByDefault={item.isOpenByDefault}
          disabled={item.disabled}
        />
      </div>
    ))}
  </div>
);

export default Accordion;