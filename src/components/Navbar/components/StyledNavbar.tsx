import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    background: var(--NAVBAR-GRADIENT);
    width: calc(100% - 25px);
    height: var(--NAVBAR-HEIGHT);
    font-size: 1.5rem;
    list-style: none;
    position: fixed;
    z-index: 999999999;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-auto-flow: column;
    grid-template-columns: 2fr 10fr;
    grid-gap: 5rem;
    padding: 0 25px 0 0px;
    filter: drop-shadow(6px 0px 12px rgba(var(--base_black_code), .85));
`