import React from 'react';
import { StyledTitle, StyledWrapper, titleSize} from './title.styles';

type titleProps = {
  title: string,
  size: titleSize,
  id?: string,
}

const Title: React.FC<titleProps> = ({title, size, id}) => {
  const titleText = title.toUpperCase()
  return (
    <StyledWrapper>
      <StyledTitle size={size} id={id}>{titleText}</StyledTitle>
    </StyledWrapper>
  )
}

export default Title
