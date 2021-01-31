import styled from 'styled-components';

export const StyledCard = styled.button`
  background: rgb(44,53,133);
  background: var(--CARD-GRADIENT);
  color: var(--WHITE);
  margin: 0;
  padding: 2.5rem 1.5rem;
  display: grid;
  grid-gap: 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 4px -1px black;
  width: 21rem;
  height: 25rem;
  place-self: center;
  text-align: left;
  justify-content: center;
  justify-items: center;
  transition: filter 0.5s ease;
  outline-color: var(--ORANGE);
  cursor: pointer;

  & svg {
    height: 55px;
    fill: var(--ORANGE);
    padding: 0;
  }

  & .svgImage {
    display: grid;
    place-items: center;
  }

  &::after {
  content: "";
  border-radius: 5px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

  &:hover {
    filter: grayscale(80%);
    box-shadow: inset 0 0 0px #000000;
    transition: filter 0.5s ease;
  }

  &:hover::after {
    opacity: 1;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`