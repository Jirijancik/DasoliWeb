import React, {useRef, useEffect, useState, useCallback} from 'react';
import Counter from '../../../components/Counter';
import { InlineGridWrapper } from '../../../utils/wrapper.styles';
import Paper from '../../../components/Paper';

let text = require('../../../assets/localization/cs_CZ.json');


interface ICountItem {
  id: string,
  label: string,
  number: string,
  duration: string
}

const CounterSection:React.FC = () => {

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
