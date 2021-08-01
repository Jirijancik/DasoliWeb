import React from 'react';
import { StyledList } from './components/StyledList';
import { StyledNavbar } from "./components/StyledNavbar";
import { StyledLink } from "./components/StyledLink";
import { StyledNavbarLogo } from "./components/NavbarLogo";


let text = require('../../assets/localization/cs_CZ.json');

type INavbar = {}

export const Navbar: React.FC<INavbar> = () => {  

  return(
  <>
    <StyledNavbar>
      <StyledNavbarLogo/>
          <StyledList>
            {Object.entries(text).map((item: any[]) => (item[1].title && item[1].id) ? 
                <li key={item[1].id}>
                  <StyledLink to={item[1].id} smooth duration={1000} offset={-170} spy={true}>{item[1].title}</StyledLink>
                </li> 
              : null 
            )}
          </StyledList>
    </StyledNavbar>
  </>
)}

