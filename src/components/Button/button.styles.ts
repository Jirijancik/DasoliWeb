import styled from 'styled-components';
import { buttonTypes, buttonSize } from './enum'

type ButtonStyleProps = {
  buttonType?: string;
  size?: buttonSize;
}

export const ButtonStyle = styled.button.attrs<ButtonStyleProps>(props => ({
  buttonType: props.buttonType,
  size: props.size || buttonSize.DEFAULT,
}))`
  --button-color-code: ${ <T extends ButtonStyleProps>(props: T) => {
    switch (props.buttonType) {
      case buttonTypes.PRIMARY:
        return 'var(--base_red_code)';
      default:
        return 'var(--base_green_code)';
    }
  }};
  border-radius: 12px;
  cursor: pointer;
  height: min-content;
  white-space: nowrap;
  padding: .7rem ${props => props.size};
  font-size: 1.4rem;
  width: min-content;
  
  font-family: var(--MAIN-FONT);
  background-color: rgb(var(--button-color-code));
  color: var(--WHITE);
  border: none;
  box-shadow: 0px 2px 10px 3px rgba(var(--button-color-code), .5), 
              0px 1px 3px 1px rgba(var(--base_black_code), .3);

  transition: filter .25s ease-in-out;

  :hover{
    filter: grayscale(80%);
  }
`