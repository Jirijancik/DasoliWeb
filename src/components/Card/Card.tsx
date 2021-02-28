import React, {useRef, useEffect, useState} from 'react';
import { StyledCard } from './components/card.styles';
import { StyledCardList } from './components/StyledCardList';
import { StyledCardDetail } from './components/StyledCardDetail';
import { StyledContentWrapper } from './components/StyledContentWrapper';
import Title from "../Title";
import { titleSize } from "../Title/title.styles";
import {TweenMax, Power3} from 'gsap';



export interface ICardProps {
  title: string,
  items: string[],
  svgItem: React.ReactNode,
  content: string,
}

export const Card = React.forwardRef<HTMLButtonElement, ICardProps>(
  (props, ref) => {
  let {title, items, svgItem, content} = props;

  const [isShowingDetail, setIsShowingDetail] = useState(false);
  const [showAnimation, setShowAnimation] = useState<any>(null);

  let cardDetailRef = useRef(null) as any;

  let handleOnClick = () => {
    setIsShowingDetail(!isShowingDetail);
  }


  useEffect(() => {
    setShowAnimation(
    TweenMax.fromTo(cardDetailRef, 1.5,{  
      opacity: 0, 
      ease: Power3.easeOut, 
    },  {  
      opacity: 1, 
      ease: Power3.easeOut, 
    }).pause())
  }, [cardDetailRef])
  
 
  
  useEffect(() => {
    if(isShowingDetail){
      showAnimation?.restart();
    }
    
  }, [isShowingDetail, showAnimation])

  return (
    <StyledCard 
      ref={ref}
      onClick={ handleOnClick } 
    >
    {(!isShowingDetail && <StyledContentWrapper >
      {svgItem}
      <span >
        <Title title={title}  size={titleSize.H3}></Title>
      </span>
      <StyledCardList>
        {items.map(<T extends string>(item: T) => {
          return <li key={item}>{item}</li>
        })}
      </StyledCardList>
    </StyledContentWrapper>)}

    {<StyledCardDetail ref={el => cardDetailRef = el} isShowingDetail={isShowingDetail}>{content}</StyledCardDetail>}

    </StyledCard>
  )
})
