import styled from 'styled-components';

type StyledImageType = {
    readonly width?: number | string;
    readonly height?: number | string;
    readonly opacity?: number;
    readonly mirrored?: boolean;
    readonly translateX?: number | string;
}

export const StyledImage = styled.img<StyledImageType>`
  position: absolute;
  background-color: transparent;
  max-height: 35rem;
  filter: drop-shadow(5px 0px 12px rgba(var(--base_black_code), .3));
  top:0;
  right:0;
  ${({mirrored, translateX}) => `transform: scaleX(${mirrored ? -1 : 1}) translateX(${translateX}) scale(1.8);`};
  opacity: ${({opacity}) => opacity ? opacity : 1};
`
