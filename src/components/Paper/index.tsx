import React from 'react';
import { PaperStyled } from './paper.styles';

type IPaperProps = {
  readonly id?: string;
}

const Paper: React.FC<IPaperProps> = ( props ) => {
  const { children, id } = props;
  
  return (
    <PaperStyled id={id}>
      { children }
    </PaperStyled>
  )
}

export default Paper
