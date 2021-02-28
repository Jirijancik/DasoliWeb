import styled from 'styled-components';

export enum titleSize {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  H4 = "H4"
}

export interface IStyledTitle {
  readonly size: titleSize
}

const getTitleSize = (size: titleSize) => {
  switch (size) {
    case titleSize.H1:
      return "var(--H1-SIZE)";
    case titleSize.H2:
      return "var(--H2-SIZE)";
    case titleSize.H3:
      return "var(--H3-SIZE)";
    case titleSize.H4:
      return "var(--H4-SIZE)";
    default:
      throw new Error("There was a problem with title size");
  }
}

export const StyledTitle = styled.h2<IStyledTitle>`
  font-weight: 400;
  font-size: ${({size}) => size && getTitleSize(size)};
  position: relative; 
  display: inline-block;
  margin: 35px 0px;
  &::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 0px;
    bottom: -5px;
    left:0;
    border-bottom: 2px solid var(--ORANGE);
  }
`

export const StyledWrapper = styled.div`
  width:100%;
  display: flex;
  align-content:center;
  justify-content:center;
`