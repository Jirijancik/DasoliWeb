import styled from "styled-components";
import { Link } from "react-scroll";

export const StyledLink = styled(Link)`
  color: white;
  transition: color 0.25s ease;
  font-size: clamp(0.85rem, calc(5vw - 1rem), 1.5rem);

  &:hover {
    color: var(--ORANGE);
    transition: color 0.25s ease;
    cursor: pointer;
  }

  &.active {
    color: var(--ORANGE);
  }
`;
