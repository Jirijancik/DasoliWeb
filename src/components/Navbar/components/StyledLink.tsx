import styled from 'styled-components';
import { Link } from 'react-scroll'

export const StyledLink = styled(Link)`
    color: white;
    transition: color 0.25s ease;
    font-size: 1.4rem;

    &:hover {
        color: var(--ORANGE);
        transition: color 0.25s ease;
        cursor: pointer;
    }

    &.active {
        color: var(--ORANGE);
    }

`