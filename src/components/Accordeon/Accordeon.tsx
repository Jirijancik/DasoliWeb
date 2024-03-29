import React, { useState } from "react";
import "./accordeon.styles.css";
import { AccordeonItem } from "./components/AccordeonItem";

type IAccordeonProps = {
  items: [
    {
      answer: string;
      id: number;
      question: string;
    }
  ];
};

const Accordeon: React.FC<IAccordeonProps> = ({ items }) => {
  const [value, setValue] = useState(items[0]?.question);

  const handleOnClick = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <React.Fragment>
      <div className="accordeon">
        {items?.map((item) => {
          return (
            <AccordeonItem
              name={item.question}
              value={item.question}
              key={item.id}
              onClick={handleOnClick}
              currentChecked={value}
              title={item.question}
              text={item.answer}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Accordeon;
