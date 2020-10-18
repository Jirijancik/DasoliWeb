import styled from 'styled-components';
import imageSVG from '../../assets/images/HeroSVG.svg';

export const HeroHeader = styled.header`
  background: url(${imageSVG});
  height: 35rem;
  background-repeat: no-repeat;
  background-attachment: fixed;
  box-shadow: 0px -3px 35px 5px rgba(var(--base_blue_code), .8), 
              0px -1px 15px 3px rgba(var(--base_black_code), .7);
`
export const Wrapper = styled.section`
  display:grid;
  grid-gap:1em;
  grid-template-rows: auto 15% 25%;
  width:30%;
  max-width:70em;
  height:100%;
  margin-left: 15vw;
  position: relative;

  p{
    color: var(--WHITE);
  }
`
export const Header = styled.h1`
  font-size: 4rem;
  font-size: clamp(2.5rem, calc(5vw + 1rem), 3.5rem);
  line-height: 1;
  text-transform: uppercase;
  align-self: flex-end;
  color: var(--WHITE);
`
export const Image = styled.img`
  position:absolute;
  max-height: 35rem;
  filter: drop-shadow(5px 0px 12px rgba(var(--base_black_code), .3));
  top:0;
  right:0;
  box-shadow: 25px -3px 15px 4px rgba(var(--base_black_code), .6);
`