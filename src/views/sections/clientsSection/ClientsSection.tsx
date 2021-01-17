import React, {useRef, useEffect, MutableRefObject} from 'react';

import {Citation} from '../../../components/Citation';
import Title from '../../../components/Title';
import { titleSize } from "../../../components/Title/title.styles";
import { InlineGridWrapper } from '../../../utils/wrapper.styles';

import {TweenMax, gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

interface IClientsSection {
  text: IText[]
}

interface IText {
  id: number,
  citationText:string,
  personName:string,
  personDescription:string,
  personImageUrl: string
}

const ClientsSection:React.FC<IClientsSection> = ({text}) => {

  gsap.registerPlugin(ScrollTrigger);

  let cardsRef = useRef() as any;
  cardsRef.current = [];

  useEffect(() => {
    console.log(cardsRef)
    ScrollTrigger.defaults({
      toggleActions: "play none none none"
    });
    
    gsap.from(cardsRef, {
      scrollTrigger:cardsRef, 
      duration: 2, 
      opacity: 0.3,
      y: -30,
      scale: .95
    });
  }, [])

  return(
    <div>
      <Title title="Naši Klienti" size={titleSize.H2}/>
      <InlineGridWrapper ref={el => cardsRef = el}>
        {text.map( item => {
          const image = require('../../../' + item.personImageUrl);
          return <Citation  citationText={item.citationText} personName={item.personName} key={item.id} personDescription={item.personDescription} personImageUrl={image}/>
        })}
      </InlineGridWrapper>
    </div>
  )
}

export default ClientsSection;
