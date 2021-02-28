import React, {useRef, useEffect, useState} from 'react';

import {Card} from '../../../components/Card';
import { InlineGridWrapper } from '../../../utils/wrapper.styles';
import Title from '../../../components/Title';
import { titleSize } from "../../../components/Title/title.styles";
import AccountingSvg from '../../../assets/images/svgAssets/AccountingSvg';
import TaxSvg from '../../../assets/images/svgAssets/TaxSvg';
import SalarySvg from '../../../assets/images/svgAssets/SalarySvg';
import EducationSvg from '../../../assets/images/svgAssets/EducationSvg';

import {TweenMax, Power3} from 'gsap'

interface ISVGS {
  accounting: React.ReactNode,
  tax: React.ReactNode,
  salary: React.ReactNode,
  education: React.ReactNode,
}

interface IServiceCardItem {
  id: string,
  title: string,
  items:string[],
  content:string,
}

let SVGS:ISVGS = {
  accounting: <AccountingSvg/>,
  tax: <TaxSvg/>,
  salary: <SalarySvg/>,
  education: <EducationSvg/>,
}


type HeroProps = {
  data: {
    title: string,
    id: string,
    services: any[],
    paragraph:string,
  };
}

const ServiceSection: React.FC<HeroProps> = ({data}) => {

  let cardsRef = useRef() as any;
  cardsRef.current = [];

  const [animation, setAnimation] = useState<any>(null);

  const addToRefs = (el: any) => {
    if (el && cardsRef && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    setAnimation(
    TweenMax.from(cardsRef.current, {  
      duration: .8,
      scale: 0.75, 
      opacity: 0, 
      delay: 0.12, 
      stagger: 0.08,
      ease: Power3.easeOut, 
    }))
  }, [cardsRef])

  return(
    <div id={data.id}>
      <Title title={data.title} size={titleSize.H2} />
      <InlineGridWrapper>
        {data.services.map((item:IServiceCardItem) => 
          <Card ref={addToRefs} key={item.id} title={item.title} items={item.items} svgItem={SVGS[item.id as keyof ISVGS]} content={item.content} />
        )}
      </InlineGridWrapper>
    </div>
  )
}

export default ServiceSection;
