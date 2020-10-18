import React from 'react';
import { ButtonStyle } from './button.styles'
import { buttonSize } from './enum';

type ButtonProps = {
  buttonType?: string;
  size?: buttonSize;
  handleOnClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonType, size, handleOnClick, children }) => (
  <React.Fragment>
    <ButtonStyle buttonType={ buttonType } size={ size } onClick={ () => handleOnClick() } >
      { children }
    </ButtonStyle>
  </React.Fragment>
)

export default Button;
