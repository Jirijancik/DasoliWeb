import React from "react";
import { useWindowSize } from "utils/hooks/useWindowSize";
import image from "../../assets/images/pavla.png";
import logo from "../../assets/logo_kdp-PNG.png";
import { StyledImage } from "./components/StyledImage";
import { Header, HeroHeader, Title, Wrapper } from "./hero.styles";

type IHeroProps = {
  data: {
    title: string;
    id: string;
    heroTitle: string;
    paragraph: string;
  };
};

const Hero: React.FC<IHeroProps> = ({ data }) => {
  const window = useWindowSize();

  const setImageVisibility = () =>
    window.width ? (window.width > 750 ? 0.9 : 0.000001) : 0;

  return (
    <HeroHeader id={data.id}>
      <Wrapper>
        <Header>{data.heroTitle}</Header>
        <p>{data.paragraph}</p>
        <div>
          <Title >POZOR: </Title>
          <div style={{color: "white"}}>
            Ve dnech <em style={{fontWeight: 600, color: "orangered"}}>22.-31.12</em>
            <br />
            bude kancelář uzavřena 
            <br />
            z důvodů vánočních svátků
            <br />
            Přejeme příjemné Vánoce
            a těšíme se na Vás v roce 2022
          </div>
        </div>
      </Wrapper>

      <StyledImage
        width={400}
        height={400}
        opacity={0.07}
        translateX={window.width ? (window.width > 750 ? "45%" : "15%") : "45%"}
        translateY='25%'
        mirrored={true}
        src={logo}
        alt='Dasoli Logo'
      />
      <StyledImage
        opacity={setImageVisibility()}
        src={image}
        alt='Pavla Sojová'
      />
    </HeroHeader>
  );
};

export default Hero;
