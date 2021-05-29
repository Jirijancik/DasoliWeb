import React from "react";
import Button from "../Button";
import { buttonTypes, buttonSize } from "../Button/enum";
import { HeroHeader, Wrapper, Header } from "./hero.styles";
import { StyledImage } from "./components/StyledImage";
import image from "../../assets/images/pavla.png";
import logo from "../../assets/logo_kdp-PNG.png";
import { useWindowSize } from "utils/hooks/useWindowSize";

type IHeroProps = {
  data: {
    title: string;
    id: string;
    heroTitle: string;
    paragraph: string;
  };
};

const Hero: React.FC<IHeroProps> = ({ data }) => {
  let doLogicOnClick = () => console.log("....code logic....");
  const window = useWindowSize();

  const setImageVisibility = () =>
    window.width ? (window.width > 750 ? 0.9 : 0.000001) : 0;

  return (
    <HeroHeader id={data.id}>
      <Wrapper>
        <Header>{data.heroTitle}</Header>
        <p>{data.paragraph}</p>
        <Button
          buttonType={buttonTypes.PRIMARY}
          size={buttonSize.XXL}
          handleOnClick={doLogicOnClick}
        >
          Zjisti víc
        </Button>
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
