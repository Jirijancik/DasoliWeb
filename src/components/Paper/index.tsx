import React from 'react';
import { PaperStyled } from './paper.styles';

const Paper: React.FC = ( props ) => {
  const { children } = props;
  
  return (
    <PaperStyled>
      { children }
    </PaperStyled>
  )
}

export default Paper
