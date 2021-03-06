import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-areas: 
    "text text"
    ". ."
    "name name"
    "description description"
    "image image"
    ;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 2rem auto auto;
  align-items: end;
  grid-gap: 0.5rem;
  margin-top: 5rem;
`