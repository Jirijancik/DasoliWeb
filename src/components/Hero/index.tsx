import React from 'react';
import Button from '../Button';
import { buttonTypes, buttonSize } from '../Button/enum';
import { 
  HeroHeader, 
  Wrapper, 
  Header, 
} from './hero.styles'
import {StyledImage} from './components/StyledImage'
import image from '../../assets/images/pavla.png';
import logo from '../../assets/logo_kdp-PNG.png';

type IHeroProps = {
  data: {
    title: string,
    id: string,
    heroTitle: string,
    paragraph:string,
  };
}


const Hero: React.FC<IHeroProps> = ({ data }) => {

  let doLogicOnClick = () => console.log("....code logic....");

  return(
    <HeroHeader id={data.id}>
      <Wrapper>
        <Header> 
          { data.heroTitle }
        </Header>
        <p>
        { data.paragraph }
        </p>
        <Button 
          buttonType = { buttonTypes.PRIMARY } 
          size = { buttonSize.XXL }
          handleOnClick = { doLogicOnClick }
        >
          Zjisti víc
        </Button>
      </Wrapper>
      

      <StyledImage width={400} height={400} opacity={0.075} translateX="45%" translateY="25%" mirrored={true} src={ logo } alt = "Dasoli Logo"/>
      <StyledImage src = { image } alt = "Pavla Sojová"/>
    </HeroHeader>
  )
};

export default Hero;
