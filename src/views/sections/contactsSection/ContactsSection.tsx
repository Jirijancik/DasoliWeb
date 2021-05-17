import React, { useRef, useEffect, useState, useCallback } from "react";
import { InlineGridWrapper } from "../../../utils/wrapper.styles";
import Paper from "../../../components/Paper";
import Map from "../../../components/Map";
import { StyledContractsDetail } from "./components/StyledContractsDetail";

let text = require("../../../assets/localization/cs_CZ.json");

const ContactsSection: React.FC = () => {
  const hiddenRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [isVisible, setIsVisible] = useState(false);

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
        <div>Dasoli s.r.o. - Opava</div>
        <div>Masařská 8</div>
        <div>Tel: +42075632111</div>
      </StyledContractsDetail>
    </div>
  );
};

export default ContactsSection;
