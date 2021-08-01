import React, { useRef, useEffect, useState } from "react";

import { Citation } from "../../../components/Citation";
import Title from "../../../components/Title";
import { titleSize } from "../../../components/Title/title.styles";
import { InlineGridWrapper } from "../../../utils/wrapper.styles";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Carousel } from "components/Carousel/Carousel";
import AndrlaLogo from "../../../assets/images/clientsLogo/AndrlaLogo.jpg";
import AnimaLogo from "../../../assets/images/clientsLogo/logo ANIMA.png";
import OOSLogo from "../../../assets/images/clientsLogo/logo OOS.jpg";
import OpametalMainLogo from "../../../assets/images/clientsLogo/OpametalMainLogo.jpg";
import NFPNLogo from "../../../assets/images/clientsLogo/NFPNLogo.jpg";
import SpiralaLogo from "../../../assets/images/clientsLogo/SpiralaLogo.png";
import { StyledAvatar } from "components/Citation/components/StyledAvatar";
import { useWindowSize } from "utils/hooks/useWindowSize";

const LOGOS = [
  AndrlaLogo,
  AnimaLogo,
  OOSLogo,
  OpametalMainLogo,
  NFPNLogo,
  SpiralaLogo,
];
interface IClientsSection {
  data: IData;
}
interface IData {
  title: string;
  id: string;
  reviews: Review[];
}

interface Review {
  id: number;
  citationText: string;
  personName: string;
  personDescription: string;
  personImageUrl: string;
}

const ClientsSection: React.FC<IClientsSection> = ({ data }) => {
  const { title, reviews, id } = data;

  const [isMobile, setIsMobile] = useState(false);
  const window = useWindowSize();

  const carouselAutoplayOptions = {
    delay: 2000,
    disableOnInteraction: false,
  }

  gsap.registerPlugin(ScrollTrigger);

  let cardsRef = useRef() as any;
  cardsRef.current = [];


  useEffect(() => {
    window.width && window.width > 750 ? setIsMobile(false) : setIsMobile(true);
  }, [window.width]);

  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: "play none none none",
    });

    gsap.from(cardsRef, {
      scrollTrigger: cardsRef,
      duration: 1.5,
      opacity: 0.3,
      y: -20,
      scale: 0.95,
    });
  }, []);

  return (
    <div id={id}>
      <Title title={title} size={titleSize.H2} />

        {!isMobile ? <InlineGridWrapper ref={(el) => (cardsRef = el)}>
          {reviews.map((item) => {
            const image = require("../../../" + item.personImageUrl);
            return (
              <Citation
                citationText={item.citationText}
                personName={item.personName}
                key={item.id}
                personDescription={item.personDescription}
                personImageUrl={image.default}
              />
            );
          })}
        </InlineGridWrapper>: 
        <Carousel
        autoplay={carouselAutoplayOptions}
        >
          {reviews.map((item) => {
            const image = require("../../../" + item.personImageUrl);
            return (
              <Citation
                citationText={item.citationText}
                personName={item.personName}
                key={item.id}
                personDescription={item.personDescription}
                personImageUrl={image.default}
              />
            );
          })}
        </Carousel>
        }
  



      <Carousel
        autoplay={carouselAutoplayOptions}
      >
        {LOGOS.map((item: any) => (
          <StyledAvatar
            width={200}
            height={170}
            src={item}
            key={item}
            alt='Client Logo'
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ClientsSection;
