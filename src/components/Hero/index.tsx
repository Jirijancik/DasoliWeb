import React, {useEffect, useState} from 'react';
import Button from '../Button';
import { buttonTypes, buttonSize } from '../Button/enum';
import { 
  HeroHeader, 
  Wrapper, 
  Header, 
} from './hero.styles'
import {StyledImage} from './components/StyledImage'
import image from '../../assets/images/pavla.png';
import logo from '../../assets/images/logo.png';

type HeroProps = {
  text: [{
    title: string,
    paragraph:string,
  }];
}


const Hero: React.FC<HeroProps> = ({ text }) => {
  const [currentScreen, setScreen] = useState(0);

  let doLogicOnClick = () => console.log("....code logic....");

  useEffect(() => {
    let toggleScreens = () => {
      let screensAmount = text.length;
      (screensAmount > currentScreen+1) ? 
      setScreen(currentScreen +1) : 
      setScreen(0);
    }
    
    let interval = setInterval(() => {
      toggleScreens()
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [currentScreen, text.length])

  return(
    <HeroHeader>
      <Wrapper>
        <Header> 
          { text[currentScreen].title }
        </Header>
        <p>
        { text[currentScreen].paragraph }
        </p>
        <Button 
          buttonType = { buttonTypes.PRIMARY } 
          size = { buttonSize.XXL }
          handleOnClick = { doLogicOnClick }
        >
          Zjisti víc
        </Button>
      </Wrapper>
      

      <StyledImage width={600} height={600} opacity={0.1} translateX="20%" mirrored={true} src = { logo } alt = "Dasoli Logo"/>
      <StyledImage src = { image } alt = "Pavla Sojová"/>
    </HeroHeader>
  )
};

export default Hero;
