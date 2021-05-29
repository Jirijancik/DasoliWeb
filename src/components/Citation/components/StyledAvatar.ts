import styled from 'styled-components';

export const StyledAvatar = styled.img`
  border-radius: 0;
  grid-area: image;
  height: ${({height}) => height? height : '50px' };
`