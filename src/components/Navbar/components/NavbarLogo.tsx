import React, {useState} from 'react';
import { StyledLink } from "./StyledLink";
import logo from '../../../assets/logo_kdp-PNG.png';
import styled from 'styled-components';
import { InlineGridWrapper } from "../../../utils/wrapper.styles";

type INavbarLogo = {

}

const NavbarLogo = styled.img`
    transition: transform 0.25s ease;
    width: 90px;
    height: 90px;

    &:hover {
        color: var(--ORANGE);
        transform: scale(1.05);
        filter: drop-shadow(2px 0px 4px rgba(var(--base_orange_code), .25));
        transition: transform 0.25s ease;
    }
`

const LogoWrapper = styled(InlineGridWrapper)`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-gap: 1rem;
    margin:0;
`


export const StyledNavbarLogo: React.FC<INavbarLogo> = () => {  

  return(
    <LogoWrapper>
        <StyledLink to="dasoli" smooth duration={1000} offset={-170} spy={true}>
        <NavbarLogo  src={logo} alt="Dasoli Navbar Logo"/>
        </StyledLink>
        <StyledLink to="dasoli" smooth duration={1000} offset={-170} spy={true}>
           DASOLI
        </StyledLink>
    </LogoWrapper>
)}

