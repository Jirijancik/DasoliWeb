import styled from 'styled-components';

export const CardStyle = styled.div`
  margin: 2rem 2rem;
  padding: 1rem 1rem;
  display: block;
  border-radius: 5px;
  box-shadow: 0px 0px 4px -1px black;
  min-width: 15rem;
  min-height: 10rem;
  width: fit-content;
  height: fit-content;
  place-self: center;
  & svg {
    height: 55px;
    fill: red;
    padding: 0.6rem;
  }

  & .svgImage {
    display: grid;
    place-items: center;
  }
`

export const CardHeader = styled.h3`
  font-weight:600;
  font-size: var(--H3-SIZE);
  position: relative; 
  display: inline-block;
  margin: 15px 0px;
  &::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 0px;
    bottom: -5px;
    left:0;
    border-bottom: 2px solid red;
  }
`