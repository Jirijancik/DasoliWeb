import React, {useRef, useEffect, useState, useCallback} from 'react';
import Accordeon from '../../../components/Accordeon/Accordeon';
import Title from '../../../components/Title';
import { titleSize } from "../../../components/Title/title.styles";


let text = require('../../../assets/localization/cs_CZ.json');


interface ICountItem {
  id: string,
  label: string,
  number: string,
  duration: string
}

const FaqSection:React.FC = () => {


  return(
    <>
      <Title title={text.faq.title} size={titleSize.H2}/>
      <Accordeon items={text.faq.items} />
    </>
  )
}

export default FaqSection;
