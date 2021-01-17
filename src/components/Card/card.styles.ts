import styled from 'styled-components';

export const CardStyle = styled.div`
  background: rgb(44,53,133);
  background: var(--CARD-GRADIENT);
  color: var(--WHITE);
  margin: 0;
  padding: 2.5rem 1.5rem;
  display: grid;
  grid-gap: 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 4px -1px black;
  min-width: 18rem;
  min-height: 25rem;
  width: fit-content;
  place-self: center;
  text-align: left;
  justify-content: center;
  justify-items: center;
  transition: filter 0.5s ease;
  & svg {
    height: 55px;
    fill: var(--ORANGE);
    padding: 0;
  }

  & .svgImage {
    display: grid;
    place-items: center;
  }

  &:hover {
    filter: grayscale(70%);
    box-shadow: inset 0 0 0px #000000;
    transition: filter 0.5s ease;
  }

`