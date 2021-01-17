import React from 'react';
import { StyledTitle, StyledWrapper, titleSize} from './title.styles';

type titleProps = {
  title: string,
  size: titleSize
}

const Title: React.FC<titleProps> = ({title, size}) => {
  const titleText = title.toUpperCase()
  return (
    <StyledWrapper>
      <StyledTitle size={size}>{titleText}</StyledTitle>
    </StyledWrapper>
  )
}

export default Title
