import React, {useEffect, useState} from 'react';
import Button from '../Button';
import { buttonTypes, buttonSize } from '../Button/enum'
import { 
  HeroHeader, 
  Wrapper, 
  Header, 
  Image 
} from './hero.styles'
import image from '../../assets/images/facePNG.png';

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
          size = { buttonSize.BIG }
          handleOnClick = { doLogicOnClick }
        >
          Zjisti víc
        </Button>
      </Wrapper>
      <Image src = { image } alt = "Roman Šmodula"/>
    </HeroHeader>
  )
};

export default Hero;
