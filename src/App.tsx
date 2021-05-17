import React from "react";
import Hero from "./components/Hero";

import { GlobalStyle } from "./utils/global.styles";
import AboutUsSection from "./views/sections/aboutUsSection/AboutUsSection";
import ClientsSection from "./views/sections/clientsSection/ClientsSection";
import CounterSection from "./views/sections/counterSection/CounterSection";
import ServiceSection from "./views/sections/servicesSection/ServiceSection";
import FaqSection from "views/sections/faqSection/FaqSection";
import ContactsSection from "views/sections/contactsSection/ContactsSection";
import { Navbar } from "components/Navbar/Navbar";

let text = require("./assets/localization/cs_CZ.json");

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className='App' style={{ display: "grid", gridGap: "5rem" }}>
        <Navbar />
        <Hero data={text.hero} />
        <ServiceSection data={text.service} />
        <AboutUsSection data={text.aboutUs} />
        <ClientsSection data={text.clients} />
        <CounterSection />
        <FaqSection data={text.faq} />
        <ContactsSection />
      </div>
    </React.Fragment>
  );
};

export default App;
