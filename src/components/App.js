import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPanel'; // eslint-disable-next-line
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <div className="App">
        <Display />
        <ButtonPannel />
      </div>
    );
  }
}

export default App;
