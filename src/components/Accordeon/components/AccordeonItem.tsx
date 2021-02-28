import React from 'react';
import "../accordeon.styles.css"

type AccordeonItemProps = {
  readonly name: string;
  readonly value: string;

  readonly defaultChecked: boolean;
  title: string,
  text: string,
  handleOnClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export const AccordeonItem: React.FC<AccordeonItemProps> = (props) => {  
    const {
        name,
        value,

        defaultChecked,
        title,
        text,
        handleOnClick,    
    } = props;

  const handleOnClickx = (e:React.MouseEvent<HTMLInputElement>) =>{
    handleOnClick(e);
  }
  

  return(
    <div className="item">
        <input 
            type="radio" 
            name={name} 
            value={value} 

            onClick={handleOnClickx}
            defaultChecked={defaultChecked}
        />
        <label 
            htmlFor={name} 
            className="entypo-"
        >
            {title}
        </label>
        <article id="content-1"><p>{text}</p></article>
    </div> 
)}

export default AccordeonItem;
