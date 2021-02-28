import styled from 'styled-components';

interface IStyledCardDetail {
    isShowingDetail:boolean,
}

export const StyledCardDetail = styled.div<IStyledCardDetail>`
    place-self: center;
    color: ${({isShowingDetail}) => isShowingDetail ? "inherit" : "transparent"};
    height: ${({isShowingDetail}) => isShowingDetail ? "auto" : "0px"};
    overflow: hidden;
`