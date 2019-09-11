import React from 'react';
import './App.scss';

import './Themes/darcula.css';

import Deck from './Components/RevealComponents/Deck';
import Slide from './Components/RevealComponents/Slide';
import Slides from './Slides';

// Setup the slide theme
import 'reveal.js/css/theme/solarized.css';

function App() {
  return (
    <div className="App">
      <Deck>
        {Slides}
        <Slide>
          <h2>Single Horizontal Slide</h2>
          <div>Body text</div>
          <div>Body text</div>
          <div>Body text</div>
          <div>Body text</div>
          <div>Body text</div>
        </Slide>
        <Slide>
          <Slide>2.1 Second Horizontal Slide</Slide>
          <Slide>2.2 Second Horizontal Slide</Slide>
        </Slide>
      </Deck>
    </div>
  );
}

export default App;
