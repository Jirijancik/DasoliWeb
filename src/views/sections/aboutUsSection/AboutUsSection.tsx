import React from 'react';


import Paper from '../../../components/Paper';
import Title from '../../../components/Title';

import { titleSize } from "../../../components/Title/title.styles";

let text = require('../../../assets/localization/cs_CZ.json');


type IAboutUsSection = {
  data: {
    title: string,
    id: string,
    text: string,
  };
}

const AboutUsSection:React.FC<IAboutUsSection> = ({data}) => {
  return(
    <>
    <Paper id={data.id}>
      <Title title={data.title} size={titleSize.H2}/>
      <p>{data.text}</p>
    </Paper>
      
    </>
  )
}

export default AboutUsSection;
