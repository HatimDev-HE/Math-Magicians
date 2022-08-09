import React, { PureComponent } from 'react';
import './index.css';
import Calculator from './components/calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends PureComponent {
  render() {
    return <Calculator />;
  }
}

export default App;
