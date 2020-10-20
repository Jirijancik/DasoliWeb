import React from 'react';

import Hero from './components/Hero';
import Card from './components/Card';
import { GlobalStyle } from './utils/global.styles';
import { InlineGridWrapper } from './utils/wrapper.styles';

let text = require('./assets/localization/cs_CZ.json');

const App = () => {
  return(
    <React.Fragment>
      <GlobalStyle />
      <div className='App'>
        <Hero text={ text.hero }/>
        <InlineGridWrapper>
          {text.service.map((item:any) => 
            <Card title={item.title} items={item.items} />
          )}
        </InlineGridWrapper>
      </div>
    </React.Fragment>
  )
}

export default App;
