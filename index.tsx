import React, { Component } from 'react';
import ReactGA from 'react-ga4';
import { render } from 'react-dom';

import Hello from './Hello';
import './style.css';

const TRACKING_ID = "G-P5P58SYRN7"

ReactGA.initialize(TRACKING_ID);
ReactGA.send('pageview');

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
