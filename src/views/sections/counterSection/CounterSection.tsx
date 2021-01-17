import React, {useRef, useEffect, useState, useCallback} from 'react';

import Hero from '../../../components/Hero';
import Counter from '../../../components/Counter';
import { GlobalStyle } from '../../../utils/global.styles';
import { InlineGridWrapper } from '../../../utils/wrapper.styles';
import Paper from '../../../components/Paper';
import Title from '../../../components/Title';
import MoneySvg from '../../../assets/images/svgAssets/MoneySvg';
import AccountingSvg from '../../../assets/images/svgAssets/AccountingSvg';
import TaxSvg from '../../../assets/images/svgAssets/TaxSvg';
import SalarySvg from '../../../assets/images/svgAssets/SalarySvg';
import EducationSvg from '../../../assets/images/svgAssets/EducationSvg';

let text = require('../../../assets/localization/cs_CZ.json');

interface ICounterSection {
 
}

interface ICountItem {
  id: "001",
  label: "A Really Big Number",
  number: "900000",
  duration: "2"
}

const CounterSection:React.FC<ICounterSection> = () => {

  const hiddenRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [isVisible, setIsVisible] = useState(false)

  const scrollHandler = useCallback(() => {
    if(hiddenRef){
      if(window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop){
        setIsVisible(true);
        window.removeEventListener('scroll', scrollHandler);
      }
    }
  }, [hiddenRef])
    
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollHandler]);
  


  return(
    <div ref={hiddenRef}>
    <Paper>
      <InlineGridWrapper>
        {text.counts.map((count: ICountItem) => <Counter key={count.id} data={count} isVisible={isVisible}/>)}
      </InlineGridWrapper>
    </Paper>
      
    </div>
  )
}

export default CounterSection;
