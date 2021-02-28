import React from 'react';
import Accordeon from '../../../components/Accordeon/Accordeon';
import Title from '../../../components/Title';
import { titleSize } from "../../../components/Title/title.styles";




type HeroProps = {
  data: {
    title: string,
    heroTitle: string,
    paragraph:string,
    id:string,
      items: [{
        answer: string;
        id: number;
        question: string;
    }],
  };
}

const FaqSection:React.FC<HeroProps> = ({data}) => {

  return(
    <>
      <Title title={data.title} size={titleSize.H2} id={data.id}/>
      <Accordeon items={data.items} />
    </>
  )
}

export default FaqSection;
