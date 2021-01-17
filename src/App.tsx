import React from 'react';

import Hero from './components/Hero';
import Accordeon from './components/Accordeon';
import Map from './components/Map';
import { GlobalStyle } from './utils/global.styles';
import { InlineGridWrapper } from './utils/wrapper.styles';
import Paper from './components/Paper';
import AboutUsSection from "./views/sections/aboutUsSection/AboutUsSection";
import ClientsSection from "./views/sections/clientsSection/ClientsSection";
import CounterSection from "./views/sections/counterSection/CounterSection";



import ServiceSection from "./views/sections/servicesSection/ServiceSection";

let text = require('./assets/localization/cs_CZ.json');



const App = () => {
  return(
    <React.Fragment>
      <GlobalStyle />
      <div className='App' style={{display: "grid", gridGap: "5rem"}}>
          <Hero text={ text.hero }/>
          <ServiceSection/>
          <AboutUsSection/>
          <ClientsSection text={text.clients}/>
          <CounterSection />
          <Accordeon />
          <Map />
      </div>
    </React.Fragment>
  )
}

export default App;
