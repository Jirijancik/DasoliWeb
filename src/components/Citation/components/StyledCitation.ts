import styled from 'styled-components';

export const StyledCitation = styled.cite`
  grid-area: text;
  max-width: 12rem;
  &::after,::before {
    content: '"'
  }
`