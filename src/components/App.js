import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null, // eslint-disable-next-line
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ buttonName }) {
    this.setState(state => calculate(state, buttonName));
  }

  render() {
    const { total, next } = this.state;
    const result = String(total) || String(next);
    return (
      <div className="App">
        <Display result={result} />
        <ButtonPanel clickhandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
