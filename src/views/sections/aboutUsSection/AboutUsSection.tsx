import React from 'react';


import Paper from '../../../components/Paper';
import Title from '../../../components/Title';

import { titleSize } from "../../../components/Title/title.styles";

let text = require('../../../assets/localization/cs_CZ.json');

interface IAboutUsSection {
 
}

const AboutUsSection:React.FC<IAboutUsSection> = () => {
  return(
    <>
    <Paper>
      <Title title="O Nás" size={titleSize.H2}/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
      </p>
    </Paper>
      
    </>
  )
}

export default AboutUsSection;
