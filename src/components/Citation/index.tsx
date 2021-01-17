import React from 'react';
import { StyledCitation } from './components/StyledCitation';
import { GridWrapper } from './components/Wrapper';
import Title from "../Title";
import { buttonTypes } from '../Button/enum'
import Button from "../Button";
import img from "assets/images/pavla.png"
import { StyledAvatar } from "./components/StyledAvatar";

type ICitation = {
  citationText: string,
  personName?: string,
  personDescription?: string,
  personImageUrl?: string,
}

export const Citation= React.forwardRef<HTMLDivElement, ICitation>(
  (props, ref) => {
  let {citationText, personName, personDescription, personImageUrl} = props;
  return (
    <>
      <GridWrapper ref = {ref}>
          <StyledCitation>
            {citationText}
          </StyledCitation>
          <div style={{gridArea:"name"}}>
            {personName}
          </div>
          <div style={{gridArea:"description"}}>
            {personDescription}
          </div>
          {personImageUrl && <StyledAvatar src={personImageUrl} alt={`Avatar of ${personName}`} />}
      </GridWrapper>
    </>
  )
})