import React, { useRef, useEffect, useState, useCallback } from "react";
import Map from "../../../components/Map";
import { StyledContractsDetail } from "./components/StyledContractsDetail";

let text = require("../../../assets/localization/cs_CZ.json");

const ContactsSection: React.FC = () => {
  const hiddenRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [_, setIsVisible] = useState(false);

  const scrollHandler = useCallback(() => {
    if (hiddenRef) {
      if (
        window.pageYOffset + window.innerHeight >=
        hiddenRef.current.offsetTop
      ) {
        setIsVisible(true);
        window.removeEventListener("scroll", scrollHandler);
      }
    }
  }, [hiddenRef]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  return (
    <div ref={hiddenRef} style={{ position: "relative" }}>
      <Map />
      <StyledContractsDetail>
        <h3>Pavla Sojová</h3>
        <div>Tel: +420 602 531 199</div>
        <div>Email: sojova@dasoli.cz</div>
        <div>Ičo: 48828343</div>
        <div>Adresa: Gagarinova 2857/13, Opava</div>
      </StyledContractsDetail>
    </div>
  );
};

export default ContactsSection;
