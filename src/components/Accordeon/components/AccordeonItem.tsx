import React, {useState} from 'react';
import "../accordeon.styles.css"

type AccordeonItemProps = {
  readonly name: string;
  readonly value: string;
  readonly key: string;
  readonly checked: boolean;
  handleOnClick: () => void;
}

const AccordeonItem: React.FC<AccordeonItemProps> = (props) => {  
    const {
        name,
        value,
        key,
        checked,
        handleOnClick,    
    } = props;

  const handleOnClickx = (e:React.MouseEvent<HTMLInputElement>) =>{
    handleOnClick();
  }
  

  return(
    <div className="item">
        <input 
            type="radio" 
            name={name} 
            value={value} 
            key={key} 
            onClick={handleOnClickx}
            checked={value === "one"}
        />
        <label 
            htmlFor="btn" 
            className="entypo-"
        >
            Frans Hals
        </label>
        <article id="content-1"><p><em>Frans Hals the Elder (c. 1582 – 26 August 1666)</em> was a Dutch Golden Age painter born in the Southern Netherlands (present-day Belgium). He is notable for his loose painterly brushwork, and helped introduce this lively style of painting into Dutch art. Hals was also instrumental in the evolution of 17th-century group portraiture.</p></article>
    </div> 
)}

export default AccordeonItem;
