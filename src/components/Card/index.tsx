import React from 'react';
import { CardStyle, CardHeader } from './card.styles';
import SVGPIC from '../../assets/images/accounting'

type cardProps = {
  title: string,
  items: string[]
}

const Card: React.FC<cardProps> = ({title, items}) => {
  return (
    <CardStyle>
      <SVGPIC />
      <CardHeader>{title}</CardHeader>
      <ul>
        {items.map( <T extends string>(item: T) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </CardStyle>
  )
}

export default Card
