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
      <p>Pavla Sojová se pyšní nemalou zkušeností, ve finančním sektoru působí již od roku 1993. V roce 2008 se rozhodla založit firmu DASOLI v návaznosti na svou účetní a daňovou praxi. 
        Pavla Sojová sdílí s týmem 6 profesionálů, kteří jsou vyškolení, aby řešili individuální potřeby podnikatelů z řady různých oborů. 
        Zvládáme pokrýt široké portfolio firem, důkazem je přes 80 stálých spokojených klientů – od akciovek až po neziskovky.
      </p>
    </Paper>
      
    </>
  )
}

export default AboutUsSection;
