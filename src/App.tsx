import React from 'react';

import Hero from './components/Hero';
import { GlobalStyle } from './App.styles'

let heroText = require('./assets/localization/cs_CZ.json');

const App = () => {
  return(
    <React.Fragment>
      <GlobalStyle />
      <div className='App'>
        <Hero text={ heroText.hero }/>
      </div>
    </React.Fragment>
  )
}

export default App;
