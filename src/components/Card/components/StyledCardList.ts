import styled from 'styled-components';

export const StyledCardList = styled.ul`
    list-style: circle;
    & li::marker {
        color: var(--ORANGE);
    }
`