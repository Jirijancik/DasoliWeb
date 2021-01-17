import React, {useRef, useEffect, MutableRefObject} from 'react';

import Hero from '../../../components/Hero';
import {Card} from '../../../components/Card';
import { GlobalStyle } from '../../../utils/global.styles';
import { InlineGridWrapper } from '../../../utils/wrapper.styles';
import Paper from '../../../components/Paper';
import Title from '../../../components/Title';
import { titleSize } from "../../../components/Title/title.styles";
import AccountingSvg from '../../../assets/images/svgAssets/AccountingSvg';
import TaxSvg from '../../../assets/images/svgAssets/TaxSvg';
import SalarySvg from '../../../assets/images/svgAssets/SalarySvg';
import EducationSvg from '../../../assets/images/svgAssets/EducationSvg';

import {TweenMax, gsap} from 'gsap'

let text = require('../../../assets/localization/cs_CZ.json');

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
}

let SVGS:ISVGS = {
  accounting: <AccountingSvg/>,
  tax: <TaxSvg/>,
  salary: <SalarySvg/>,
  education: <EducationSvg/>,
}

const ServiceSection = () => {

  let cardsRef = useRef() as any;
  cardsRef.current = [];

  const addToRefs = (el: any) => {
    if (el && cardsRef && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    console.log(cardsRef)
    gsap.from(cardsRef.current, {  
      duration: .9,
      scale: 0.7, 
      opacity: 0, 
      delay: 0.15, 
      stagger: 0.09,
      ease: "power2", 
    })
  }, [])

  return(
    <>
      <Title title="Služby" size={titleSize.H2}/>
      <InlineGridWrapper >
        {text.service.map((item:IServiceCardItem) => 
          <Card ref= {addToRefs}  key={item.id} title={item.title} items={item.items} svgItem={SVGS[item.id as keyof ISVGS]} />
        )}
      </InlineGridWrapper>
    </>
  )
}

export default ServiceSection;
