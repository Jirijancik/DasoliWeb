import React, {useRef, useEffect, MutableRefObject} from 'react';

import {Citation} from '../../../components/Citation';
import Title from '../../../components/Title';
import { titleSize } from "../../../components/Title/title.styles";
import { InlineGridWrapper } from '../../../utils/wrapper.styles';

import {TweenMax, gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

interface IClientsSection {
  data: IData
}
interface IData {
  title: string,
  id: string,
  reviews: Review[]
}

interface Review {
  id: number,
  citationText:string,
  personName:string,
  personDescription:string,
  personImageUrl: string
}

const ClientsSection:React.FC<IClientsSection> = ({data}) => {
  const {
    title,
    reviews,
    id,
  } = data;

  gsap.registerPlugin(ScrollTrigger);

  let cardsRef = useRef() as any;
  cardsRef.current = [];

  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: "play none none none"
    });
    
    gsap.from(cardsRef, {
      scrollTrigger:cardsRef, 
      duration: 1.5, 
      opacity: 0.3,
      y: -20,
      scale: .95
    });
  }, [])

  return(
    <div id={id}>
      <Title title={title} size={titleSize.H2}/>
      <InlineGridWrapper ref={el => cardsRef = el}>
        {reviews.map( item => {
          const image = require('../../../' + item.personImageUrl);
          return <Citation  citationText={item.citationText} personName={item.personName} key={item.id} personDescription={item.personDescription} personImageUrl={image.default}/>
        })}
      </InlineGridWrapper>
    </div>
  )
}

export default ClientsSection;
