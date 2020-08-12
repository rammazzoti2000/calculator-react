import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPanel'; // eslint-disable-next-line
import calculate from '../logic/calculate';

function App() {
  return (
    <div className="App">
      <Display />
      <ButtonPannel />
    </div>
  );
}

export default App;
