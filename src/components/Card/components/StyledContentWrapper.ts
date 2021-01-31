import styled from 'styled-components';

export const StyledContentWrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  width: fit-content;
  place-self: center;
  text-align: left;
  justify-content: center;
  justify-items: center;
  height: 100%;
  & svg {
    height: 55px;
    fill: var(--ORANGE);
    padding: 0;
  }

  & .svgImage {
    display: grid;
    place-items: center;
  }

`