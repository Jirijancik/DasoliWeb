import React, {forwardRef, useEffect} from 'react';
import { CardStyle } from './card.styles';
import Title from "../Title";
import { titleSize } from "../Title/title.styles";
import { buttonTypes, buttonSize } from '../Button/enum'
import Button from "../Button";


export interface ICardProps {
  title: string,
  items: string[],
  svgItem: React.ReactNode,
}

export const Card = React.forwardRef<HTMLDivElement, ICardProps>(
  (props, ref) => {
  let {title, items, svgItem} = props;
  let doLogicOnClick = () => console.log("....code logic....");

  return (
    <CardStyle ref = {ref}>
      {svgItem}
      <span>
        <Title title={title} size={titleSize.H3}></Title>
      </span>
      <ul>
        {items.map(<T extends string>(item: T) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
      <Button 
          buttonType = { buttonTypes.PRIMARY } 
          size = { buttonSize.BIG }
          handleOnClick = { doLogicOnClick }
        >
          Zjisti víc
      </Button>
    </CardStyle>
  )
})
