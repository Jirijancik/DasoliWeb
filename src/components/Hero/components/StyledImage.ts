import styled from 'styled-components';

type StyledImageType = {
    readonly width?: number | string;
    readonly height?: number | string;
    readonly opacity?: number;
    readonly mirrored?: boolean;
    readonly translateX?: number | string;
    readonly translateY?: number | string;
}

export const StyledImage = styled.img<StyledImageType>`
  position: absolute;
  background-color: transparent;
  max-height: 35rem;
  filter: drop-shadow(5px 0px 12px rgba(var(--base_orange_code), .25));
  top:0;
  right:0;
  ${({mirrored, translateX, translateY}) => `transform: scaleX(${mirrored ? -1 : 1}) translate(${translateX}, ${translateY}) scale(1.8);`};
  opacity: ${({opacity}) => opacity ? opacity : 1};
`
