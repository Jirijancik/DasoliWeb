import React from "react";
import "../accordeon.styles.css";

type AccordeonItemProps = {
  readonly name: string;
  readonly value: string;
  readonly currentChecked: string;
  readonly title: string;
  readonly text: string;
  onClick: (e: React.FormEvent<HTMLInputElement>) => void;
};

export const AccordeonItem: React.FC<AccordeonItemProps> = (props) => {
  const { name, value, title, text, onClick, currentChecked } = props;

  const handleOnClick = (e: React.FormEvent<HTMLInputElement>) => {
    onClick(e);
  };

  return (
    <div className="item">
      <input
        type="radio"
        name={name}
        value={value}
        onClick={handleOnClick}
        onChange={handleOnClick}
        checked={value === currentChecked}
      />
      <label htmlFor={name} className="entypo-">
        {title}
      </label>
      <article id="content-1">
        <p>{text}</p>
      </article>
    </div>
  );
};

export default AccordeonItem;
